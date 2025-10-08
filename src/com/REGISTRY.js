/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import HelpCommand from "./cmdlet/help.js";

export default class DiscordWikiBotCommandRegistry {

    static help = {
        expression: (_keyword) => /^[?]help *$/.test(_keyword) ? _keyword : false,
        dispatch: (_messageRef) => { HelpCommand(_messageRef) }
    }

}