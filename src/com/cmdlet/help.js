/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import DiscordBotFileReader from "../../utils/file-reader.util.js";


/**
 * Help Command Definition Is Loacted Here
 * @param {DiscordMessageObject} message 
 */
const HelpCommand = (message) => {
    DiscordBotFileReader.read('help')
        .then((_response) => {
            message.reply(_response);
        })
        .catch((error) => {
            console.log(error);
        })
}

export default HelpCommand;