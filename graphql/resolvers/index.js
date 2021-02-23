const auths         = require('./auth/index');
const user          = require('./user/index');
const transation    = require('./transactions/index');

const rootResolvers = {
    ...user,
    ...auths,
    ...transation
}

module.exports = rootResolvers;