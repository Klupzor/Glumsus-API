const express = require ('express')
const router = express.Router();
const Person = require('../models/person')
const Business = require('../models/business')


router.get('/', (req, res) => {
    Person.find((err, tasks) => {
        if (err) return console.error(err)
        res.json(tasks)
    })
})
/* GET SINGLE PRODUCT BY USER */

router.get('/:title', function(req, res, next) {
    var title = req.params.title
    Business.findOne({user : title}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
    // console.log(req.params.title)
  });
/* GET SINGLE PRODUCT BY ID */

  router.get('/:id', function(req, res, next) {
    Person.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

//   SAVE PRODUCT .........................
router.post('/', (req, res) => {
    let body = req.body

    Person.create(body, (err, task) => {
        if (err) return console.error(err)
        // res.json(body)
        res.send('guardado')
    })

})

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
    Person.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
    //   res.json(post);
        res.send('Modificado!')
    
    });
  });

  /* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
    Person.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.send('borrado!')
      
    });
  });

module.exports = router;