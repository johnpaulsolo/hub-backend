const User = require('../../../models/Users/index');

const userRelation = userId => {
    return User.findById(userId)
        .then(result => {
            return {
                ...result._doc
            }
        }).catch(err => {
            throw err;
        })
}

exports.userRelation = userRelation;