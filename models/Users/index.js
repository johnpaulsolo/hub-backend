const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true
    },
    FName: {
        type: String,
        required: true
    },
    LName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    UserType: {
        type: String,
        required: true
    },
    Image: {
        type: String
    },
    Phone: {
        type: String,
        required: true
    },
    Vehicle: {
        type: String
    },
    PlateNo: {
        type: String
    },
    Decals: {
        type: String
    },
    Hub: {
        type: String
    }
});

module.exports = mongoose.model('Users', UsersSchema);