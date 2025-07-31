import chalk from 'chalk';
import boxen from 'boxen';

export default function Developer(model) {
    console.log("");
prompt: console.log(chalk.hex('#FFD700').bold(`${model}`) + 
                    chalk.whiteBright.bold('@') + 
                    chalk.hex('#007FFF').bold(`sspai-cli`) + 
                    chalk.gray.bold(' ~ $'));
    const sections = [
        {
            title: "📘 API Documentation",
            description: "Explore full API reference for sspai-cli with usage and responses.",
            link: "https://github.com/swarnade/sspai-cli"
        },
        {
            title: "📦 SDKs & Libraries",
            description: "Official SDKs for Node.js, Python, and CLI integration.",
            link: "https://github.com/swarnade/sspai-cli"
        },
        {
            title: "💻 CLI Tooling",
            description: "Automate tasks using the powerful sspai-cli CLI.",
            link: "https://github.com/swarnade/sspai-cli"
        },
        {
            title: "🔗 Webhooks",
            description: "Get real-time updates via webhooks and callbacks.",
            link: "https://github.com/swarnade/sspai-cli"
        }
    ];

    const contact = [
        { label: "🌐 Portfolio", value: "https://swarnadeepsahapoddar.in/" },
        { label: "💼 LinkedIn", value: "https://www.linkedin.com/in/swarnadeep-saha-poddar/" },
        { label: "📦 GitHub", value: "https://github.com/swarnade/" },
        { label: "📧 Email", value: "swarnadeepsahapoddar@gmail.com" }
    ];

    // Developer Tools Section

    // Contact Section
    const contactText = contact
        .map(c => `${chalk.bold(c.label)}:\n${chalk.cyanBright(c.value)}\n`)
        .join('\n');

    console.log(
        boxen(
            chalk.yellowBright.bold("👤 Developer Contact Info\n\n") + contactText,
            {
                padding: 1,
                margin: 1,
                borderStyle: 'round',
                borderColor: 'cyan'
            }
        )
    );
}
