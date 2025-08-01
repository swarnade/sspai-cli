import axios from "axios";
import chalk from "chalk";
import boxen from "boxen";

const currentVersion = {
    Version: "1.1.1",
    Date: "01-08-2025",
    Reference: "Developed The Initial Version"
};

export default async function Version(model) {
    console.log("");
prompt: console.log(chalk.hex('#FFD700').bold(`${model}`) + 
                    chalk.whiteBright.bold('@') + 
                    chalk.hex('#007FFF').bold(`sspai-cli`) + 
                    chalk.gray.bold(' ~ $'));


    console.log(chalk.yellowBright(` Current Version: `) + chalk.white.bold(currentVersion.Version));
    console.log(chalk.yellowBright(` Release Date   : `) + chalk.white.bold(currentVersion.Date));

    try {
        const response = await axios.get("https://sspai.swarnadeepsahapoddar.in/allversions");
        const versionList = response.data;

        const isLatest = versionList.some(v => v.Version === currentVersion.Version);

        if (isLatest) {
            console.log(chalk.green.bold("\n You are using the latest version!"));
        } else {
            const latest = versionList[versionList.length - 1];
            console.log(chalk.yellow.bold("\n⚠️ New Version Available!"));
            console.log(chalk.magenta(` Latest Version : `) + chalk.white.bold(latest.Version));
            console.log(chalk.magenta(` Release Date   : `) + chalk.white.bold(latest.Date));
            console.log("")
        }

    } catch (error) {
        console.error(chalk.red.bold("\n❌ Error fetching version data:"), chalk.red(error.message));
    }
}
