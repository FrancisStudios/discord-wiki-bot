/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { Client, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import { DISCORD_EVENTS } from './ENUM.js';
import { LOG_MESSAGES, PREFIXES } from './CONSTANTS.js';

/* Bot Intents And Permissions Section Should be Here */
const _botClientIntents = {
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent
    ]
};


/* Bot Authentications Should All be Here In this Section */
const DiscordBotClient = new Client(_botClientIntents);
config();
DiscordBotClient.login(process.env.DISCORD_WIKI_BOT_API_KEY);


/* Control Flow And Program Blueprint Should Live Over Here */
DiscordBotClient.on(DISCORD_EVENTS.CLIENT_READY, (_readyState) => {
    console.log(PREFIXES.LOG_PREFIX, LOG_MESSAGES.CLIENT_READY);
});

DiscordBotClient.on(DISCORD_EVENTS.MESSAGE_CREATE, (msg) => {

});