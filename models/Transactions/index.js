const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    UserId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    DropAddress: {
        type: String
    },
    PickAddress: {
        type: String
    },
    DropLat: {
        type: Number
    },
    DropLong: {
        type: Number
    },
    PickLat: {
        type: Number
    },
    PickLong: {
        type: Number
    },
    HubLocated: {
        type: String
    },
    Notes: {
        type: String
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema);