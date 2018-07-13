    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var MenuSchema = Schema({
        user: String,
        cover: String,
        category: String,
        name: String,
        description: String,
        price: String,
    })


     module.exports = db.model('Menu', MenuSchema)
    
    
