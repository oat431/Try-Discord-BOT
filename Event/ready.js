const { bot } = require('../deploy-command');
module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        bot()
        console.log(`Logged in as ${client.user.tag}!`);
    }
}