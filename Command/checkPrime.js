const { SlashCommandBuilder } = require('@discordjs/builders')
const { checkPrime } = require('../services/CheckPrime')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('check-prime-of')
        .setDescription('Check prime of the number')
        .addIntegerOption(option => 
            option.setName('number')
            .setDescription('just-type-number-please')
            .setRequired(true)
        ),
    async execute(interaction){
        const number = interaction.options.getInteger('number')
        let msg = '';
        if(checkPrime(number)){
            msg = `Number: ${number} is a prime number`
        }else{
            msg = `Number: ${number} is not a prime number`
        } 
        return interaction.reply(msg);
    }
}