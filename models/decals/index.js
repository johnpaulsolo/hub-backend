const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DecalsSchema = new Schema({
    UserId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    Pic1: {
        type: String,
        required: true
    },
    Pic2: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Decals', DecalsSchema)