import axios from "axios";
import chalk from "chalk";
import boxen from "boxen";

export default async function Model(model) {
prompt: console.log(chalk.hex('#FFD700').bold(`${model}`) + 
                    chalk.whiteBright.bold('@') + 
                    chalk.hex('#007FFF').bold(`sspai-cli`) + 
                    chalk.gray.bold(' ~ $'));
    console.log(chalk.green("✅ Current Loaded Model: ") + chalk.white.bold(model));

    try {
        const response = await axios.get("https://sspai.swarnadeepsahapoddar.in/allmodels");
        const allmodels = response.data;

        const modelNames = allmodels.map(m => m.Model);

        console.log(
            boxen(
                chalk.yellow.bold("🔍 Available Models:\n") +
                chalk.cyanBright(modelNames.join("\n")),
                {
                    padding: 1,
                    margin: 1,
                    borderStyle: "round",
                    borderColor: "magenta",
                    align: "center"
                }
            )
        );

    } catch (error) {
        console.error(chalk.red("❌ Failed to fetch model list: "), chalk.redBright(error.message));
    }
}
