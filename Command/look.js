const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('how-am-i-look')
        .setDescription('Bot will admire you')
        .addStringOption(option => 
            option.setName("select-your-sex")
                .setDescription("Just select it dammit")
                .setRequired(true)
                .addChoice("male","male")
                .addChoice("female","female") 
            ),
    async execute(interaction) {
        const data = interaction.options.getString("select-your-sex")
        console.log(data)
        let msg = "";
        if(data === 'male'){
            msg = "You look so Handsome.\nThank you for your existance."
        }else if(data === 'female'){
            msg = "You look so Cute.\nYour existance is worth to admire."
        }
        return interaction.reply(msg)
    }
}