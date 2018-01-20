var discord = require('discord.js');
var chatController = require('./chatController');
var bot = new discord.Client();

chatController(bot);
