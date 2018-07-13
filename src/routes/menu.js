const express = require ('express')
const router = express.Router();
const Menu = require('../models/menu')
const Business = require('../models/business')
const Person = require('../models/person')

//creando item de menu adjunto al negocio que lo crea
router.post('/:id', (req, res, next) => {
    let body = req.body
 

    let carta = new Menu(body)
    carta.save(function (err) {
       if (err) return console.error(err) 
           // saved!
   });

   // agregando id del menu al array de menus del negocio
   Business.findByIdAndUpdate(req.params.id, {$push: {menus: carta._id}}, function (err, post) {
    if (err) return next(err);
//   res.json(post);
    res.send('Modificado!')

});


})

router.get('/', (req, res) => {
    Menu.find((err, tasks) => {
        if (err) return console.error(err)
        res.json(tasks)
    })
})

router.get('/:user', function(req, res, next) {
    var user = req.params.user
    // Business.find({user : user}, function (err, post) {
    //   if (err) return next(err);
    //   res.json(post);
    // });
    Person.findOne({user : user}).populate({path: 'businessId', populate: {path: 'menus'}}).exec(function (err, post) {
        if (err) return next(err);
        res.json(post);
    }) ;
    // console.log(req.params.title)
  });

  //borrando con la id del menu
router.delete('/:id', function(req, res, next) {

        // borrando la id del array menus del negocio
    Business.update({menus: {$in: [req.params.id]}}, {$pull: {menus: {$in: [req.params.id]}}}, function (err, post) {
        if (err) return next(err);
        // console.log('borrado!')
    })

    //Borrando menu de la pase de datos
    Menu.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.send('borrado!')
      
    });
  });

module.exports = router;