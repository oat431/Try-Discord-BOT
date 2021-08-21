const fs = require('fs');
const authToken = require('./util/config.json');
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();

const commandFile = fs.readdirSync('./Command').filter(file => file.endsWith('.js'));

for(const file of commandFile) {
    const command = require(`./Command/${file}`);
    client.commands.set(command.data.name,command)
}

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('interactionCreate', async interaction => {
	console.log(interaction);
    if(!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName)

    if(!command) return

    try{
        await command.execute(interaction);
    }catch(error){
        console.error(error);
        await interaction.reply({content:"some error happen",ephemeral:true})
    }
    
});

client.login(authToken.token);