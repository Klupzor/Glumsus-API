var db = require('../libs/db-connection')();
var Schema = require('mongoose').Schema;

var BusinessSchema = Schema({
    name: String,
    type: String, //res,dis,bar
    status: { type: Boolean, default: true },
    panel: String, //ciudad
    user: {         //usuario que se usa para el link del negocio
        type: String,
        lowercase: true,
        required: true
    },
    email: {type: String, lowercase: true},
    phone: Number,
    services: Boolean
})


 module.exports = db.model('Business', BusinessSchema)

