const mongoose = require('mongoose');

const gyroidSchema = new mongoose.Schema({
    name: { type: String, required: true },
    colour: { type: String, required: true }
});

module.exports = mongoose.model("Gyroid", gyroidSchema);