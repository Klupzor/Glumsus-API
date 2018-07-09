const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const morgan = require ('morgan')

const indexRoutes = require('./routes/index.js')
const registerRoutes = require ('./routes/register.js')
const cellRoutes = require('./routes/cell.js')
const signupRoutes = require('./routes/signup')
const loginRoutes = require('./routes/login')
const userRoutes = require('./routes/user')

// settings 
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes
// app.use('/', indexRoutes)
app.use('/reg', registerRoutes)
app.use('/cell', cellRoutes)
app.use('/signup', signupRoutes)
app.use('/login', loginRoutes)
app.use('/user', userRoutes)





//static files
// app.use(express.static(path.join(__dirname, 'dist')))


app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'))
})