const express = require ('express')
const router = express.Router();
const Business = require('../models/business')
const Person = require ('../models/person')
const jwt = require('jsonwebtoken')

//--------------------middelware verificando token con nombre de usuario-------------

router.use((req, res, next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    if(token){
        jwt.verify(token, 'glumsus', (err, decoded)=>{
            if (err) {
                return res.json({
                    success: false,
                    message: 'autenticacion fallida'
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        return res.json({
            success: false,
            message: 'no existe el token'
        })
    }
})

// ------------------------------mostrando datos de negocio---------------------
router.get('/business', (req, res)=>{
    // console.log(req)
    // res.json({datos: req.decoded})
    var user = req.decoded
    Business.findOne({user : user}).populate({path: 'menuCategories', populate: {path: 'menus'}}).exec(function(err, post){
        if (err) return next(err);
      res.json({
          success: true,
          business: post
        });
    })
})

//----------------------mostrando datos de persona-------------------------------
router.get('/person', (req, res)=>{
    // console.log(req)
    // res.json({datos: req.decoded})
    var user = req.decoded
    Person.findOne({user : user}, function (err, post) {
      if (err) return next(err);
      res.json({
        success: true,
        person: post
      });
    });
})

router.put('/business/about', (req, res)=>{
    var user = req.decoded
    Business.findOneAndUpdate({user : user}, req.body, function (err, post) {
        if (err) return next(err);
        res.json({
            success: true,
            message: "Modificada informacion del negocio"
          });
    
    })
})

module.exports = router

