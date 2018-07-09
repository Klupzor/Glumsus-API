const express = require ('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const Business = require('../models/business')
const Person = require ('../models/person')
const jwt = require('jsonwebtoken')

//   login .........................
 router.post('/', async (req, res) => {
    const body = req.body

    const user =  await Person.findOne({user: body.user})
    if (!user){
        return res.send({
            success: false,
            message: 'Usuario no registrado'
        })
    }
    const validPassword = await bcrypt.compare(body.password, user.password)

    if(!validPassword){
        return res.send({
            success: false,
            message: 'password incorrecto'
        })
    }
    //-------------acceso correcto----------
    const token = jwt.sign(user.user, 'glumsus')

    return res.send({
        success: true,
        message: 'Welcome!!!',
        token
    })

})



module.exports = router