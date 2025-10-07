/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { Client, GatewayIntentBits, Partials } from 'discord.js';
import { config } from 'dotenv';
import { DISCORD_EVENTS } from './ENUM.js';
import { GENERIC_RESPONSE_MESSAGES, LOG_MESSAGES, PREFIXES } from './CONSTANTS.js';
import DiscordBotFileReader from './utils/file-reader.util.js';

/* Bot Intents And Permissions Section Should be Here */
const _botClientIntents = {
    partials: [Partials.Channel, Partials.Message],
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
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

DiscordBotClient.on(DISCORD_EVENTS.MESSAGE_CREATE, (message) => {

    switch (message.content) {

        case /^[?]hello$/.test(message.content) ? message.content : false:
            message.reply(GENERIC_RESPONSE_MESSAGES.TEST_RESPONSE);
            break;

        case /^[?]help *$/.test(message.content) ? message.content : false:
            DiscordBotFileReader.read('help')
                .then((resp) => {
                    message.reply(resp);
                })
                .catch((error) => {
                    console.log(error);
                });
            break;

        default:
            if (/^[?][A-Za-z0-9] */.test(message.content)) {
                message
                    .reply(GENERIC_RESPONSE_MESSAGES.COMMAND_NOT_RECOGNIZED);

                console
                    .log(
                        PREFIXES.LOG_PREFIX,
                        LOG_MESSAGES.CMD_INVALID
                    )
            }
            break;
    }
});