var db = require('../libs/db-connection')();
var Schema = require('mongoose').Schema;

var BusinessSchema = Schema({
    name: {type: String, default: "Editar nombre del negocio"},
    cell: {type: String, required: true}, //res,dis,bar
    status: { type: Boolean, default: true },
    panel: String, //ciudad
    user: {         //usuario que se usa para el link del negocio
        type: String,
        lowercase: true,
        required: true
    },
    email: {type: String, lowercase: true},
    phone: {type: String, default: ""},
    address: {type: String, default: ""},
    businessHours: {type: String, default: ""},
    services: Boolean,
    cover: String,
    created: { type: Date, default: Date.now },
    menuCategories: [{type: Schema.Types.ObjectId, ref: 'MenuCategory'}],
    aboutUs: {type: String, default: "Editar descripción del negocio"},
    lat: Number,
    lng: Number

})


 module.exports = db.model('Business', BusinessSchema)

