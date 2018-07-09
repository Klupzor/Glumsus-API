const express = require ('express')
const router = express.Router();
const Business = require('../models/business')
const Person = require ('../models/person')

//   SAVE Business .........................
router.post('/', (req, res) => {
    let body = req.body

    Business.create(body, (err, task) => {
        if (err) return console.error(err) 
        // res.json(body)
        // res.send('guardado')
    })
    Person.create(body, (err, task) => {
        if (err){
            res.send(err.message)
            return console.error(err)
        } 
        // res.json(body)
        res.send('guardado')
    })

})

//   SAVE Business .........................
router.put('/:user', function(req, res, next) {
    var user = req.params.user
    Business.findOneAndUpdate({user : user}, req.body, function (err, post) {
        if (err) return next(err);
    //   res.json(post);
        res.send('Modificado!')
    
    });
  });

//   router.get('/:title', function(req, res, next) {
//     var title = req.params.title
//     Business.findOne({user : title}, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//     // console.log(req.params.title)
//   });

module.exports = router

