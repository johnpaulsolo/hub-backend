const User = require('../../../models/Users/index');
const jwt = require('jsonwebtoken');

module.exports = {
    login: async ({Username, Password}) => {

        const user = await User.findOne({Username: Username});

        if (!user) {
            throw new Error('invalid');
        }
        const password = await User.findOne({Password: Password});
        if (!password) {
            throw new Error('invalid');
        }

        const token = jwt.sign({userId: user.id, Username: user.Username}, 'marchesupersecretkey', {
            expiresIn: '1h'
        });
        return {
            userId: user.id,
            userType: user.UserType,
            token: token,
            tokenExpiration: 1
        }
    }
}