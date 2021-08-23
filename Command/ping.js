const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("test if the bot is alive"),
    async execute(interaction) {
        return interaction.reply('pong')
    }
}