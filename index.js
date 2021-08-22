const { Client, Intents } = require('discord.js');
const { token } = require('./util/config.json');
const init = require('./services/deploy-command');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    init.bot();
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'how_i_am_i_look_like') {
        await interaction.reply(`${interaction.user.tag} is na ta dee`);
    }
});

client.login(token);