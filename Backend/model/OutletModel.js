const mongoose = require('mongoose')

const OutSchema = new mongoose.Schema({
    image: { type: String, require: true },
    countryname: { type: String, require: true },
    street: { type: String, require: true },
    area: { type: String, require: true },
    state: { type: String, require: true }
})

const OutletModel = mongoose.model("outlets",OutSchema);

module.exports = OutletModel