/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { GENERIC_RESPONSE_MESSAGES } from "../../CONSTANTS.js";

/** This is the test command for this bot :) ^^ */
const HelloCommand = (message) => {
    message
        .reply(GENERIC_RESPONSE_MESSAGES.TEST_RESPONSE);
}

export default HelloCommand;