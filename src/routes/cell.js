const express = require ('express')
const router = express.Router();
const Cell = require('../models/cell')

//   Crear Cell .........................
router.post('/', (req, res) => {
    let body = req.body

    Cell.create(body, (err, task) => {
        if (err) return console.error(err) 
        res.json(body)
        // res.send('guardado')
    })
  

})

//   Modificando Cell .........................
router.put('/:panel', function(req, res, next) {
    var panel = req.params.panel
    Cell.findOneAndUpdate({panel : panel}, req.body, function (err, post) {
        if (err) return next(err);
      res.json(post);
        // res.send('Modificado!')
    
    });
  });


// Mostrando Cell ejm cell/Sogamoso
  router.get('/:panel', function(req, res, next) {
    var panel = req.params.panel
    Cell.find({panel : panel}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
    // console.log(req.params.title)
  });

module.exports = router