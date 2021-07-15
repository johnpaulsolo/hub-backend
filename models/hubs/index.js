const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HubSchema = new Schema({
    Hub: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("Hubs", HubSchema);