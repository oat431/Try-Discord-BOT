const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./util/config.json');
const { bot } = require('./deploy-command');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./Command').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
	const command = require(`./Command/${file}`);
	client.commands.set(command.data.name,command);
}

client.once('ready', () => {
    bot();
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);	

	if(!command) return;

	try{
		await command.execute(interaction);
	}catch(error){
		console.error(error);
		return interaction.reply({content:"This command face some problem while executing, retry it maybe?"})
	}
});

client.login(token);