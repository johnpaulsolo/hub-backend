const Transaction = require('../../../models/Transactions/index');
const { userRelation } = require('../merge/index');

module.exports={
    CreateTransaction: (args) => {

        const {
            UserId,
            DropAddress,
            PickAddress,
            DropLat,
            DropLong,
            PickLat,
            PickLong,
            HubLocated,
            Notes,
            Status
        } = args.newTransaction

        const newTransaction = new Transaction({
            UserId: UserId,
            DropAddress: DropAddress,
            PickAddress: PickAddress,
            DropLat: DropLat,
            DropLong: DropLong,
            PickLat: PickLat,
            PickLong: PickLong,
            HubLocated: HubLocated,
            Notes: Notes,
            Status: Status
        });

        return newTransaction
            .save().then(result => {
                return { 
                    ...result._doc
                }
            }).catch(err => {
                throw err;
            });
    },
    AllTransactions: (args) => {
        
        return Transaction.find()
            .then(result => {
                return result.map(Data => {
                    return {
                        ...Data._doc,
                        UserId: userRelation.bind(this, Data._doc.UserId),
                        Driver: userRelation.bind(this, Data._doc.Driver)
                    }
                })
            }).catch(err => {
                throw err;
            });
    },
    Transaction: (args) => {

        return Transaction.findById(args.Hub)
            .then(result => {
                return {
                    ...result._doc,
                    Driver: userRelation.bind(this, ...result._doc.Driver)
                }
            }).catch(err => {
                throw err;
            });
    },
    UserPendingTransactions: (args) => {
        
        return Transaction.findOne({ UserId: { _id: args.User }, Status: "Pending"})
            .then(result => {
                return {
                    ...result._doc
                }
            }).catch(err => {
                throw err;
            });
    },
    Searching: (args) => {

        return Transaction.findOne({ _id: args.TripId})
            .then(result => {
                return {
                    ...result._doc
                }
            }).catch(err => {
                throw err;
            });
    },
    EditStatus: (args) => {
        return Transaction.findOne({ _id: args.account })
            .then(result => {
                if (result._doc.Driver == null || result._doc.Driver == args.rider) {
                    return Transaction.findByIdAndUpdate(args.account, {
                            Status: args.status,
                            Driver: args.rider
                        })
                        .then(data => {
                            return {
                                ...data._doc,
                                Driver: userRelation.bind(this, data._doc.Driver)
                            }
                        }).catch(err => {
                            throw err;
                        });
                }
            }).catch(err => {
                throw err;
            });
    }
}