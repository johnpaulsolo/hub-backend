const auths         = require('./auth/index');
const user          = require('./user/index');
const transation    = require('./transactions/index');
const decals        = require('./decals/index');
const hub           = require('./hub/index');

const rootResolvers = {
    ...user,
    ...auths,
    ...transation,
    ...decals,
    ...hub
}

module.exports = rootResolvers;