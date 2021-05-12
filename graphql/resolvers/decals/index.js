const Decals = require('../../../models/decals/index');
const { userRelation } = require('../merge/index');

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
                    ...result._doc,
                    UserId: userRelation.bind(this, result._doc.UserId)
                }
            }).catch(err => {
                throw err;
            })
    },
    AllDecals: () => {
        return Decals.find()
            .then(result => {
                return result.map(Data => {
                    return {
                        ...Data._doc,
                        UserId: userRelation.bind(this, Data._doc.UserId)
                    }
                })
            }).catch(err => {
                throw err;
            });
    }
}