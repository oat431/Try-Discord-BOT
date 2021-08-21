const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Just test command"),
    async execute(interaction) {
        await interaction.reply('Pong')
    }

}