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
                    if (r && r[IDENTIFIERS.DISCORD_ID] == '') {

                        DiscordWikiBotLogger
                            .log(`${LOG_MESSAGES.USER_IDENTIFIER_ACCEPTED} ${userPeronalityIdentifierToken} for uid: {uid}`);

                        message
                            .reply(GENERIC_RESPONSE_MESSAGES.IDENTIFIER_ACCEPTED);

                    } else handleInvalidIDErrorCases(r, message, userPeronalityIdentifierToken);
                }
            );
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