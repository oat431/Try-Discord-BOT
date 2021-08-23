const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('how-am-i-look')
        .setDescription('Bot will admire you'),
    async execute(interaction) {
        return interaction.reply('You look so Cute/Handsome.\nThank you for your existance.')
    }
}