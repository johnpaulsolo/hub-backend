const Hubs = require('../../../models/hubs/index')

module.exports = {
    AllHubs: () => {
        
        return Hubs.find()
            .then(result => {
                return result.map(Data => {
                    return {
                        ...Data._doc
                    }
                })
            }).catch(err => {
                throw err;
            });
    },

    CreateHub: (args) => {

        const newHub = new Hubs({
            Hub: args.Hub
        });

        return newHub.save()
            .then(result => {
                return {
                    ...result._doc
                }
            }).catch(err => {
                throw err;
            })
    }
}