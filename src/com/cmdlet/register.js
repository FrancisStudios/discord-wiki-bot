/**
 *  ------ [ Property of Francis Studios ] ------
 * ==============================================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

const RegisterCommand = (message) => {
    const messageTokens = message
        .content
        .split(' ');

    const userPeronalityIdentifierToken = messageTokens[1]
        ? messageTokens[1]
        : false;


    console.log('register', userPeronalityIdentifierToken);
}

export default RegisterCommand;