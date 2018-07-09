    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var CellSchema = Schema({
        panel: {         //ciudad 
            type: String,
            required: true
        },
        cell: {type: String, required: true},
        cover: String 

    })


     module.exports = db.model('Cell', CellSchema)
    
    
