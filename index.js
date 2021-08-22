const fs = require('fs');
const { token } = require('./util/config.json');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFile = fs.readdirSync('./Event').filter(file => file.endsWith('.js'));

for(const file of eventFile) {
    const event = require(`./Event/${file}`);
    if(event.once){
        client.once(event.name, (...args) => event.execute(... args, client));
    }else{
        client.on(event.name, (...args) => event.execute(... args, client));
    }
}

client.login(token);