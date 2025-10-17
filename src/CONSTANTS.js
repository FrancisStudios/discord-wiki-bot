/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

const LOG_MESSAGES = {
    CLIENT_READY: '🟢 Discord Wiki Bot Client Ready',
    CMD_INVALID: '❌ An Invalid Command Has Been Received',
    USER_IDENTIFIER_INVALID: '❓Invalid User Identifier Was Inserted:',
    USER_IDENTIFIER_ACCEPTED: '👤 User identifier accepted:',
    USER_REGISTRATION_DB_ERROR: '💔 ERROR: Something is broken while trying to register new user! (db.js)',
    REGISTER_UPDATE_DB_ERROR: '💔 ERROR: Could not register new user - likely a database issue setUserAuthenticationToken() returned falsely'
}

const PREFIXES = {
    LOG_PREFIX: '[duegev-discord-bot]',
}

const GENERIC_RESPONSE_MESSAGES = {
    COMMAND_NOT_RECOGNIZED: 'This command was not recognized by **Duegevbot** try `?help` for a list of commands',
    TEST_RESPONSE: 'world',
    IDENTIFIER_IS_ALREADY_IN_USE: '🏷️ Identifier is already in use, you `cannot register it again`. Please contact administrator!',
    IDENTIFIER_INVALID: '**🏷️ It seems to be an invalid identifier** \n Please check again for typos 👀 or contact the administrator!',
    IDENTIFIER_ACCEPTED: '**🎉 Welcome 🎉** \n Your `user identifier` has been accepted and registered. Now you have access to elevated actions (like creating, editing documents)'
}

export {
    LOG_MESSAGES,
    PREFIXES,
    GENERIC_RESPONSE_MESSAGES
}