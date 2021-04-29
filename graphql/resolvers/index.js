const auths         = require('./auth/index');
const user          = require('./user/index');
const transation    = require('./transactions/index');
const decals        = require('./decals/index');

const rootResolvers = {
    ...user,
    ...auths,
    ...transation,
    ...decals
}

module.exports = rootResolvers;