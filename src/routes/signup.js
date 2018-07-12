const express = require ('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const Business = require('../models/business')
const Person = require ('../models/person')
const Menu = require('../models/menu')

//   Create business and user .........................
 router.post('/', async (req, res) => {
    const body = req.body

    // Validando user
    const existPerson = await Person.findOne({user: body.user})

    if(existPerson){
        return res.send({
            succes: false,
            message: 'Error: Usuario ya registrado'
        })
    }

      //Validando email
      const existEmail = await Person.findOne({emailPerson: body.emailPerson})

      if(existEmail){
          return res.send({
              succes: false,
              message: 'Error: Email ya registrado'
          })
      }

      // ................................creando negocio adjunto al usuario ......................................................
      let negocio = new Business(body)
      negocio.save(function (err) {
         if (err) return console.error(err) 
             // saved!
     });

      // creando usuario ------------------------------------------
      let password = await bcrypt.hash(body.password, 10)

      let datos = new Person ({user: body.user, password: password, emailPerson: body.emailPerson, businessId: negocio._id});
      datos.save(function (err) {
          if (err) return console.error(err) 
        // saved!
      });

      //Usuario registrado con exito
      return res.send ({
          succes: true,
          message: 'Usuario registrado!'
      })

})



module.exports = router

