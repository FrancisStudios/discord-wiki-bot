/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import HelloCommand from "./cmdlet/hello.js";
import HelpCommand from "./cmdlet/help.js";
import LSCommand from "./cmdlet/ls.js";
import RegisterCommand from "./cmdlet/register.js";


/**
 * This is where to register new command expressions and
 * bind the command definitions which should be located in
 * /cmdlet/<cmd_name>Command.js file (just good practice)
 */
export default class DiscordWikiBotCommandRegistry {

    static help = {
        expression: (_keyword) => /^[?]help *$/.test(_keyword) ? _keyword : false,
        dispatch: (_messageRef) => { HelpCommand(_messageRef) }
    }

    static hello = {
        expression: (_keyword) => /^[?]hello$/.test(_keyword) ? _keyword : false,
        dispatch: (_messageRef) => { HelloCommand(_messageRef) }
    }

    static ls = {
        expression: (_keyword) => /^[?]ls *$/.test(_keyword) ? _keyword : false,
        dispatch: (_messageRef) => { LSCommand(_messageRef) }
    }

    static register = {
        expression: (_keyword) => /^[?]register */.test(_keyword) ? _keyword : false,
        dispatch: (_messageRef) => { RegisterCommand(_messageRef) }
    }

}