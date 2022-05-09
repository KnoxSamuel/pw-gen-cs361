function generatePassword(len){

    const charset = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    let randomness = '';

    for (let i = 0; i < len; ++i) {
        randomness += charset.charAt(Math.random() * charset.length);
    };
    return randomness;
};
exports.generatePassword = generatePassword;