    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var PersonSchema = Schema({
        user: {         //usuario que se usa para el link del negocio
            type: String,
            lowercase: true,
            unique: true,
            required: true
        },
        created: { type: Date, default: Date.now },
        emailPerson: {type: String, lowercase: true, required: true},
        namePerson: String,
        phonePerson: Number,
        password: String,
        businessId: [Schema.Types.ObjectId]


    })


     module.exports = db.model('Person', PersonSchema)
    
    
