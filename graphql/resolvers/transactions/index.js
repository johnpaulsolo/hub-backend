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
                        UserId: userRelation.bind(this, Data._doc.UserId)
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
                    ...result._doc
                }
            }).catch(err => {
                throw err;
            });
    },
    UserPendingTransactions: (args) => {
        
        return Transaction.find({ UserId: { _id: args.User }, Status: "Pending"})
            .then(result => {
                return {
                    ...result._doc
                }
            }).catch(err => {
                throw err;
            });
    },
    EditStatus: (args) => {

        return Transaction.findByIdAndUpdate(args.account, {
                Status: args.status
            })
            .then(result => {
                return {
                    ...result._doc
                }
            }).catch(err => {
                throw err;
            });
    }
}