/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { MongoClient } from "mongodb";
import DB_CONFIG from './config.json' assert {type: 'json'};
import DiscordWikiBotLogger from "../log/log.js";
import { LOG_MESSAGES } from "../CONSTANTS.js";
import { IDENTIFIERS } from "../ENUM.js";

export default class DiscordWikiBotMongoDBClient {

    instance;
    client;

    static getInstance = () => {
        if (!this.instance) this.instance = new DiscordWikiBotMongoDBClient();
        return this.instance;
    }

    constructor() {
    }

    /**
     * Returns user object as Query Result when executing
     * this DB query with the parameter of the correct UID
     * @param {string<AuthToken>} _localUID 
     * @returns {Promise<QueryResultObject>}
     */
    getUserAuthenticationToken = async (_localUID) => {
        return new Promise(
            async (resolve, reject) => {

                let result;

                try {
                    this.client = new MongoClient(DB_CONFIG.URI);
                    const db = this.client.db(DB_CONFIG.DB_NAME);
                    const users = db.collection(DB_CONFIG.COLLECTIONS.USERS);
                    const userTokenQuery = { uid: _localUID };
                    result = await users.findOne(userTokenQuery);
                } catch {
                    DiscordWikiBotLogger
                        .log(LOG_MESSAGES.USER_REGISTRATION_DB_ERROR);
                    reject(result);
                } finally {
                    await this.client.close();
                    resolve(result);
                }
            }
        );
    }

    /**
     * Updates DB user object with DiscordUserId if it's empty
     * or returns with false
     * @param {String<AuthToken>} _localUID 
     * @param {String<DiscordUserId>} _discordUID 
     * @returns {Promise<Boolean>}
     */
    setUserAuthenticationToken = async (_localUID, _discordUID) => {
        return new Promise(
            async (resolve, reject) => {

                try {
                    this.client = new MongoClient(DB_CONFIG.URI);

                    const db = this.client.db(DB_CONFIG.DB_NAME);
                    const users = db.collection(DB_CONFIG.COLLECTIONS.USERS);

                    const result = await users
                        .updateOne(
                            { uid: _localUID },
                            { $set: { [IDENTIFIERS.DISCORD_ID]: _discordUID } }
                        );

                    DiscordWikiBotLogger
                        .log(result);
                } catch {
                    DiscordWikiBotLogger
                        .log('error occured');
                    reject(false);
                } finally {
                    await this.client.close();
                    resolve(true);
                }
            }
        );
    }

}