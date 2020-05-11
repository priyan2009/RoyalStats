const {
    Client,
    Attachment
} = require('discord.js');
const bot = new Client();

const token = 'NzA4OTM3MTIyOTk1ODk2Mzkx.XrgXSw.RsmbcfCy39ogEzgH9fzTLImAH64';

const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () => {
    console.log('The bot is online!');
    bot.user.setActivity('indian relics', {
        type: 'VISITING'
    }).catch(console.error);

})

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if (!channel) return;

    channel.send(`Welcome to the official server of Indian Relics, make sure you check the rules!`)
});


bot.on('message', message => {

    let args = message.content.substring(PREFIX.lenght).split("");

    switch (args[0]) {
        case 'kick':
        
            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('You were kicked for not following Rules!').then(() => {
                        message.reply(`Successfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply('Unable to kick member');
                        console.log(err);
                    });
                } else {
                    message.reply("That user isnt in this guild")
                }
            } else {
                message.reply('You need to specify a person!');
            }

            break;
    }


});


bot.login(token);