#!/usr/bin/env node

import readline from "readline";
import chalk from "chalk";
import os from 'os';

import Intro from "../components/intro.js"
import Version from "../components/version.js"
import Model from "../components/model.js"
import Chat from "../components/chat.js";
import developer from "../components/developer.js"

var currentModel = process.env.SSPAI_DEFAULT_MODEL || "o3-mini";
const username = os.userInfo().username;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: chalk.hex('#00FFD1').bold(`${username}`) +
        chalk.whiteBright.bold('@') +
        chalk.hex('#FF007F').bold(`sspai-cli`) +
        chalk.white.bold(' ~ $ ')
});

Intro().then(() => {
    rl.prompt();
})



rl.on("line", async (input) => {
    if (input.trim() === "exit") {
        console.log(chalk.red.bold("\n👋 Session Ended. Have a great day!\n"));
        rl.close();
        return;
    }

    else if (input.trim() === "-v" || input.trim() === "--version") {
        await Version(currentModel);
        rl.prompt();
    }

    else if (input.trim() === "-m" || input.trim() === "--model") {
        await Model(currentModel);
        rl.prompt();
    }
    else if (input.trim() === "-d" || input.trim() === "--developer") {
        await developer(currentModel);
        rl.prompt();
    }

    else if (input.trim() === "welcome") {
        Intro().then(() => {
            rl.prompt();
        })
    }


    else if (input.startsWith('set model')) {
        const newModel = input.split(' ').slice(2).join(' ').trim();

        if (newModel) {
            currentModel = newModel;
            prompt: console.log(chalk.hex('#FFD700').bold(`${currentModel}`) +
                chalk.whiteBright.bold('@') +
                chalk.hex('#007FFF').bold(`sspai-cli`) +
                chalk.gray.bold(' ~ $') + chalk.greenBright(' Model successfully updated to: ') +
                chalk.magentaBright.bold(currentModel));
        } else {

            prompt: console.log(chalk.hex('#FFD700').bold(`${currentModel}`) +
                chalk.whiteBright.bold('@') +
                chalk.hex('#007FFF').bold(`sspai-cli`) +
                chalk.gray.bold(' ~ $') + chalk.redBright('❌ Missing model name.') +
                chalk.yellow(' Usage: ') + chalk.cyan('set model <model-name>'));
            console.log(

            );
        }
        rl.prompt();
        return;
    }

    else {

        const output = await Chat(input, currentModel);
        prompt: console.log(chalk.hex('#FFD700').bold(`${currentModel}`) +
            chalk.whiteBright.bold('@') +
            chalk.hex('#007FFF').bold(`sspai-cli`) +
            chalk.gray.bold(' ~ $ ')+ output);
        rl.prompt()

    }
});

rl.on('close', () => {
    console.log(chalk.yellow('\nGoodbye!'));
    process.exit(0);
})


