    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var MenuCategorySchema = Schema({
        name: String,
        menus: [{type: Schema.Types.ObjectId, ref: 'Menu'}]
        
    })


     module.exports = db.model('MenuCategory', MenuCategorySchema)
    
    
