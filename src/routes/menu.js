const express = require ('express')
const router = express.Router();
const Menu = require('../models/menu')
//creando item de menu
router.post('/', (req, res) => {
    let body = req.body

    Menu.create(body, (err, task) => {
        if (err) return console.error(err)
        // res.json(body)
        res.send('guardado')
    })

})

module.exports = router;