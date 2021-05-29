const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const geoSchema = new Schema({
    nr: {type:String},
    number:{type:String},
    city_number:{type:String},
    location_number:{type:String},
    name: { type: String, required: true},
    address: { type: String, required: true},
    lat: { type: String, required: true},
    lng: { type: String, required: true},
    category:{type: String}
});

const GeoModel = mongoose.model("GeoModel", geoSchema, "geo_data");

module.exports = GeoModel;