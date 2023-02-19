const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    locationCountry: String,
    locationVillage: String,
    locationLatLon: Object,
    locationTemperature: Number,
    locationWeatherDesc: String,
}, { timestamps: true }, {collection: 'userManualMarker'});

module.exports = mongoose.model("User",userSchema);