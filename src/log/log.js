/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { PREFIXES } from "../CONSTANTS.js"

export default class DiscordWikiBotLogger {
    static log = (__LOGMESSAGE) => {

        console
            .log(
                PREFIXES.LOG_PREFIX,
                __LOGMESSAGE
            )
    }
}
