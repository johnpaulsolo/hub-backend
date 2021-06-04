const User = require('../../../models/Users/index');

module.exports={
    CreateAccount: (args) => {

        const {
            Username,
            Email,
            FName,
            LName,
            Password,
            UserType,
            Phone,
            Vehicle,
            PlateNo,
            Decals
        } = args.newAccount

        const newAccount = new User({
            Username: Username,
            Email: Email,
            FName: FName,
            LName: LName,
            Password: Password,
            Phone: Phone,
            UserType: UserType,
            Vehicle: Vehicle,
            PlateNo: PlateNo,
            Decals: Decals
        });

        return newAccount
            .save().then(result => {
                return { 
                    ...result._doc
                }
            }).catch(err => {
                throw err;
            });
    },
    Profile: (args) => {
        
        return User.findById(args.userId)
            .then(result => {
                return {
                    ...result._doc
                }
            }).catch(err => {
                throw err;
            });
    }
}