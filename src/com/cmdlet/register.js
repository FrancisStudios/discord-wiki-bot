/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import DiscordWikiBotMongoDBClient from "../../db/db.js";

const RegisterCommand = (message) => {

    const DBClient = DiscordWikiBotMongoDBClient.getInstance();

    const messageTokens = message
        .content
        .split(' ');

    const userPeronalityIdentifierToken = messageTokens[1]
        ? messageTokens[1]
        : false;


    console.log('register', userPeronalityIdentifierToken);

    if (userPeronalityIdentifierToken)
        DBClient
            .getUserAuthenticationToken(userPeronalityIdentifierToken)
            .then(
                (r) => {
                    console.log(r);
                }
            );
}

export default RegisterCommand;