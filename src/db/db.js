/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import { MongoClient } from "mongodb";
import DB_CONFIG from './config.json' assert {type: 'json'};

export default class DiscordWikiBotMongoDBClient {

    instance;
    client;

    static getInstance = () => {
        if (!this.instance) this.instance = new DiscordWikiBotMongoDBClient();
        return this.instance;
    }

    constructor() {
    }

    getUserAuthenticationToken = async (_userID2Query) => {
        return new Promise(
            async (resolve, reject) => {

                let result;

                try {
                    this.client = new MongoClient(DB_CONFIG.URI);
                    const db = this.client.db(DB_CONFIG.DB_NAME);
                    const users = db.collection(DB_CONFIG.COLLECTIONS.USERS);
                    const userTokenQuery = { uid: _userID2Query };
                    result = await users.findOne(userTokenQuery);
                } finally {
                    await this.client.close();

                    resolve(result);
                }
            }
        );
    }

}