var discord = require('discord.js');
var chatController = require('./chatController.js');
var bot = new discord.Client();

chatController(bot);
