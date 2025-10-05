/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { Client, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

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
DiscordBotClient.on('messageCreate', (msg) => {

});