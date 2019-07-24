const bCrypt = require('bcrypt-nodejs');

module.exports = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};