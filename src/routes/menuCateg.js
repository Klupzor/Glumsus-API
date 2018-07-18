const express = require ('express')
const router = express.Router();
const MenuCategory = require('../models/menuCategory')
const Business = require('../models/business')
const Person = require('../models/person')

//creando item de menu adjunto al negocio que lo crea
router.post('/:id', (req, res, next) => {
    let body = req.body
 

    let category = new MenuCategory(body)
    category.save(function (err) {
       if (err) return console.error(err) 
           // saved!
   });

   // agregando id del menu al array de menus del negocio
   Business.findByIdAndUpdate(req.params.id, {$push: {menuCategories: category._id}}, function (err, post) {
    if (err) return next(err);
//   res.json(post);
    return res.send ({
        success: true,
        message: 'Categoria creada!'
    })

});


})


router.get('/:user', function(req, res, next) {
    var user = req.params.user
    // Business.find({user : user}, function (err, post) {
    //   if (err) return next(err);
    //   res.json(post);
    // });
    Person.findOne({user : user}).populate({path: 'businessId', populate: {path: 'menuCategories'}}).exec(function (err, post) {
        if (err) return next(err);
        res.json(post);
    }) ;
    // console.log(req.params.title)
  });

  //borrando con la id de la categoria
router.delete('/:id', function(req, res, next) {

        // borrando la id del array menuCategories del negocio
    Business.update({menuCategories: {$in: [req.params.id]}}, {$pull: {menuCategories: {$in: [req.params.id]}}}, function (err, post) {
        if (err) return next(err);
        // console.log('borrado!')
    })

    //Borrando menu de la base de datos
    MenuCategory.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        return res.send ({
            success: true,
            message: 'Categoria borrada!'
        })
      
    });
  });

module.exports = router;