const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('boi if you dont get the fuck outta here with that ping bullshit');
  	}
    else if (message.content === "pp.") {

       // make sure the user is in a voice channel
       if (message.member.voiceChannel) {

           // join the user's voice channel
           message.member.voiceChannel.join()
               .then(connection => {

                   // get a random audio file from our list
                   const randAudioFile = _.sample(audioFiles);

                   // play the random audio file
                   const dispatcher = connection.playFile("./data/" + randAudioFile);

                   // disconnect from the voice channel when the quote is over
                   dispatcher.on("end", () => {
                       message.member.voiceChannel.leave();
                       fs.appendFileSync("log.txt", moment().format("YYYY-MM-DD HH:mm:ss.SSS ") + randAudioFile + "\n");
                   });
               })
               .catch(console.log);
       }
   }
});
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
