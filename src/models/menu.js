    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var MenuSchema = Schema({
        panel: {         //ciudad 
            type: String,
            required: true
        },
        cell: {         //categoria: res/bar/dis/ 
            type: String,
            required: true
        },
        user: {type: String, required: true},
        cover: String,
        category: String,
        name: String,
        description: String,
        price: String,
    })


     module.exports = db.model('Menu', MenuSchema)
    
    
