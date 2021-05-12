const Decals = require('../../../models/decals/index');

module.exports = {
    SendDecals: (args) => {
        const {
            UserId,
            Pic1,
            Pic2,
            Date
        } = args.newDecal

        const SetDecals = new Decals({
            UserId: UserId,
            Pic1: Pic1,
            Pic2: Pic2,
            Date: Date
        })

        return SetDecals.save()
            .then( result => {
                return {
                    ...result._doc
                }
            }).catch(err => {
                throw err;
            })
    }
}