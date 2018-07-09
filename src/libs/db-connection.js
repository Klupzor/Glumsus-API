const mongoose = require('mongoose')

let db

module.exports = function Connection(){
    
    if (!db) {
        // servidor base de datos en mlab:
        mongoose.connect('mongodb://klupzor:12345qwer@ds135810.mlab.com:35810/test-api-glumsus')


        // servidor base de datos en mongodb atlas:
        // mongoose.connect('mongodb+srv://klupzor:and2904@cluster0-ohm4w.mongodb.net/test?retryWrites=true')

        // .then(() =>  console.log('connection succesful'))
        .catch((err) => console.error(err));
        db = mongoose.connection
    }

    return db
}