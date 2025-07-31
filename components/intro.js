import figlet from "figlet";
import gradient from "gradient-string";
import chalk from "chalk";
import boxen from "boxen";

export default function Intro() {
    return new Promise((resolve, reject) => {
        figlet.text("SSP AI CLI", {
            font: "Standard",
            horizontalLayout: "default",
            verticalLayout: "default",
        }, function (err, data) {
            if (err) {
                console.log("Something went wrong with figlet...");
                console.dir(err);
                return reject(err);
            }

            // Intro Banner
            console.log(gradient.pastel.multiline(data));
            console.log(gradient.vice("🚀 Your smart terminal assistant, Powered by OpenAI / Gemini.\n"));


            // Commands Section
            const commandsBox = boxen(
                `
  ${chalk.cyan("type anything")}               ${chalk.white("→ Enters chat mode")}
  ${chalk.cyan("welcome")}                     ${chalk.white("→ Show intro screen again")}
  ${chalk.cyan("set model <model_name>")}      ${chalk.white("→ Set the active model")}
  ${chalk.cyan("exit / quit")}                 ${chalk.white("→ Close the assistant")}
        `,
                {
                    title: chalk.green("📘 Commands"),
                    padding: 0,
                    margin: 0,
                    borderColor: "green",
                    borderStyle: "round",
                }
            );

            console.log(commandsBox);
            // Options Section
            const optionsBox = boxen(
                `
  ${chalk.cyanBright("-v")}, ${chalk.cyanBright("--version")}   ${chalk.white("Check current version")}
  ${chalk.cyanBright("-m")}, ${chalk.cyanBright("--model")}     ${chalk.white("Shows current & available model")}
  ${chalk.cyanBright("-d")}, ${chalk.cyanBright("--developer")} ${chalk.white("View developer details")}
        `,
                {
                    title: chalk.magenta("🛠️ Options"),
                    padding: 0,
                    margin: 0,
                    borderColor: "cyan",
                    borderStyle: "round",
                }
            );

            console.log(optionsBox);


            resolve(); // Notify caller that Intro has finished rendering
        });
    });
}
