const express = require ('express')
const router = express.Router();
const Menu = require('../models/menu')
//creando item de menu
router.post('/', (req, res) => {
    let body = req.body

    Menu.create(body, (err, task) => {
        if (err) return console.error(err)
        res.json(task)
        // res.send('guardado')
    })

})

router.get('/', (req, res) => {
    Menu.find((err, tasks) => {
        if (err) return console.error(err)
        res.json(tasks)
    })
})

router.get('/:user', function(req, res, next) {
    var user = req.params.user
    Menu.find({user : user}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
    // console.log(req.params.title)
  });

router.delete('/:id', function(req, res, next) {
    Menu.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.send('borrado!')
      
    });
  });

module.exports = router;