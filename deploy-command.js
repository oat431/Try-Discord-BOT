const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } =  require('discord-api-types/v9');
const { clientId, guildId, token } = require('./util/config.json');

const commands = [];
const commandFiles = fs.readdirSync('./Command').filter(file=>file.endsWith('.js'));

for(const file of commandFiles) {
	const command = require(`./Command/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

const bot = async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);
		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
};

module.exports = { bot }