module.exports = {
	name: 'interactionCreate',
	async execute(interaction,client) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		if (!interaction.isCommand()) return;

		const command = client.commands.get(interaction.commandName);	

		if(!command) return;

		try{
			await command.execute(interaction);
		}catch(error){
			console.error(error);
			return interaction.reply({content:"This command face some problem while executing, retry it maybe?"})
		}
	},
};