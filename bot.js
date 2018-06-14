
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const audioFiles = fs.readdirSync("./data");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('fuck me pussy boy');
  	} 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
