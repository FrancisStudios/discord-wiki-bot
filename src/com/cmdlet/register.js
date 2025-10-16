/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { GENERIC_RESPONSE_MESSAGES, LOG_MESSAGES } from "../../CONSTANTS.js";
import DiscordWikiBotMongoDBClient from "../../db/db.js";
import { IDENTIFIERS } from "../../ENUM.js";
import DiscordWikiBotLogger from "../../log/log.js";

const RegisterCommand = (message) => {

    const DBClient = DiscordWikiBotMongoDBClient.getInstance();

    const messageTokens = message
        .content
        .split(' ');

    const userPeronalityIdentifierToken = messageTokens[1]
        ? messageTokens[1]
        : false;

    if (userPeronalityIdentifierToken)
        DBClient
            .getUserAuthenticationToken(userPeronalityIdentifierToken)
            .then(
                (r) => {
                    (r && r[IDENTIFIERS.DISCORD_ID] == '')
                        ? handleValidIDNormalCase(r, message, userPeronalityIdentifierToken)
                        : handleInvalidIDErrorCases(r, message, userPeronalityIdentifierToken);
                }
            )
            .catch((_rejection) => { });
}

/** Handle VALID and INVALID cases - so it is not so bloated in the ctrl flow */
const handleValidIDNormalCase = (r, message, userPeronalityIdentifierToken) => {
    const userId = message.author.id ?? 0;
    DiscordWikiBotLogger
        .log(`${LOG_MESSAGES.USER_IDENTIFIER_ACCEPTED} ${userPeronalityIdentifierToken} for uid: ${userId}`);
    message
        .reply(GENERIC_RESPONSE_MESSAGES.IDENTIFIER_ACCEPTED);
}

const handleInvalidIDErrorCases = (r, message, userPeronalityIdentifierToken) => {
    DiscordWikiBotLogger
        .log(`${LOG_MESSAGES.USER_IDENTIFIER_INVALID} ${userPeronalityIdentifierToken}`);

    if (r && r[IDENTIFIERS.DISCORD_ID] != '')
        message
            .reply(GENERIC_RESPONSE_MESSAGES.IDENTIFIER_IS_ALREADY_IN_USE)
    else
        message
            .reply(GENERIC_RESPONSE_MESSAGES.IDENTIFIER_INVALID)
}

export default RegisterCommand;