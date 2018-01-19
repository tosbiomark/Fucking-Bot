var discord = require('discord.js');
var bot = new discord.Client();

bot.on('message',message => {
    var admin = message.author;
    var msg = message.content.toUpperCase();
    var prefix = '+';

    ////////////////////////////////////////////////////
    var botdefendtext = [
        'Amare gail dis na othello ke',
        'Aryanna magir pola ase to itare de na',
        'Shob dekhi khankir pola',
        'Bott madacchot bazi tui',
        'Tor mare hoga',
        'Gail dis na bhai',
        'Tomar hoga'
    ];
    ////////////////////////////////////////////////////
    if(msg === prefix+'YO'){
        message.channel.send("Whassup nigga");
    }
    else if(msg === prefix+'OTHELLO'){
        message.channel.send("Ita to bosti :smirk:");
    }
    else if(msg === prefix+'ARYAN'){
        message.channel.send("Ita nake diye shing pore itar kotha bolis na :joy:");
    }
    else if(msg === prefix+'ADIL'){
        message.channel.send("Itar pasa choto :grin:");
    }
    else if(msg === prefix+'PLAY SONG'){
        message.channel.send("Soupin borhan er gaan chala");
        message.channel.send(";;play jadukor shironamhin");
    }
    else if(msg === prefix+'KI OBOSTHA'){
        message.channel.send(":unamused:");
    }
    else if(msg === prefix+'I LOVE YOU'){
        message.channel.send("Cholo chudi");
    }
    else if(msg === prefix+'HI'){
        message.channel.send("https://xvideos.com ekhane dhuk :yum:");
    }
    else if(msg === 'SUP'){
        message.channel.send("absdfsd");
    }
    else if(msg.indexOf(prefix)>-1){
        if(msg.indexOf('FUCK')>-1 && msg.indexOf('BOT')>-1){
            message.channel.send(botdefendtext[Math.floor(Math.random()*botdefendtext.length)]);
        }
        if(msg.indexOf('FUCK')>-1 && msg.indexOf('YOU')>-1){
            message.channel.send(botdefendtext[Math.floor(Math.random()*botdefendtext.length)]);
        }
   

        if(msg.indexOf('GOOD NIGHT')>-1){
            message.channel.send("Good Night Bro");
        }
        
    }
}); 

bot.login(process.env.BOT_TOKEN);
