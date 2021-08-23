const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./util/config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./Command').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./Event').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
	const command = require(`./Command/${file}`);
	client.commands.set(command.data.name,command);
}

for(const file of eventFiles){
	const event = require(`./Event/${file}`);
	if(event.once){
		client.once(event.name,(...args) => event.execute(...args));
	}else{
		client.on(event.name,(...args) => event.execute(...args,client));
	}
}

client.login(token);