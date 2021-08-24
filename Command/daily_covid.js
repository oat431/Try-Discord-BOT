const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { getCovid } = require('../services/covidAPI');
const wait = require('util').promisify(setTimeout);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('daily-covid')
        .setDescription('Check Covid-19 Case'),
    async execute(interaction) {
        let covid;

        try{
            covid = await getCovid("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all");
        } catch(err){
            console.error(err);
        } 

        const embedMsg = new MessageEmbed()
            .setColor("#0099EE")
            .setTitle("Covid Daily")
            .setThumbnail("https://image.freepik.com/free-vector/covid-19-poster-with-virus-icon_1142-7401.jpg")
            .setDescription("The simple covid on discord")
            .addFields(
                {name:'Thailand Covids-19 status today', value:` ${covid.txn_date} `},
                {name:'\u200B',value:'\u200B'},
                {name:'Today Covid-19 Possitive',value:`${covid.new_case} cases`},
                {name:'Covid-19 Infected All the time',value:` ${covid.total_case_excludeabroad} `}
            )
            .setFooter(`update at: ${covid.update_date}`)

        await wait(1000)
        interaction.reply('Here you go')        
        interaction.channel.send({embeds:[embedMsg]})
    }     
}