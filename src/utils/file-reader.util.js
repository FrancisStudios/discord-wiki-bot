/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import fs from 'fs';
import { EXTENSIONS, SUPPORTED_ENCODINGS } from '../ENUM.js';


export default class DiscordBotFileReader {
    /**
     * Reads up manual pages as default, but can
     * be extended to read up other files too
     * @param {string} fileName 
     * @param {string} fileType 
     * @returns {Promise<String>}
     */
    static read = (fileName, fileType = 'man') => {

        const filePath = `./${fileType}/${fileName}${fileType == 'man' ? EXTENSIONS.MAN : fileType}`;

        return new Promise((resolve, reject) => {
            fs.readFile(filePath, SUPPORTED_ENCODINGS.UTF8, (error, data) => {
                if (error)
                    console.log(error)
                    //reject(error)

                resolve(data);
            });
        })
    }
}