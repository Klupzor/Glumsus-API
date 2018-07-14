    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var MenuSchema = Schema({
        cover: String,
        name: String,
        description: String,
        price: String,
    })


     module.exports = db.model('Menu', MenuSchema)
    
    
