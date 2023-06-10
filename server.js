// // DEPENDENCIES
// const express = require('express')
// const app = express()
// const methodOverride = require('method-override')

// // CONFIGURATION
// require('dotenv').config()
// const PORT = process.env.PORT
// console.log(PORT)

// //Middleware
// const breadsController = require('./controllers/breads_controller.js')
// const breads = require('./controllers/breads_controller.js')
// app.use(methodOverride('_method'))
// app.use('/breads', breadsController)
// app.use(express.static('public'))
// app.use(express.urlencoded({extended: true}))
// app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())

// // ROUTES
// app.get('/', (req, res) => {
//   res.send('Welcome to an Awesome App about Breads!')
// })

// // LISTEN
// app.listen(PORT, () => {
//   console.log('listening on port:', PORT);
// })

// // 404 Page
// app.get('*', (req, res) => {
//   res.send('404')
// })


const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose =require('mongoose')

//configuration:
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//routes:
app.get('/', (req, res) => {
    res.send('Welcome to the World of Bread!')
})

mongoose.connect(process.env.MONGO_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true},()=>{
        console.log('Connected to MongoDB:', process.env.MONGO_URI)
})

  
// Breads/middleware:
const breadsController = require('./controllers/breads_controller.js')
app.use(methodOverride('_method'))
app.use('/breads', breadsController)
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


  
// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  


//Adding Comment Checking Git

app.listen(PORT, ()=> {
    console.log('listening on port: ', PORT)
})
// https://digitalskills.instructure.com/courses/9255/pages/code-along-be-3-server-side-views-and-rendering-with-jsx?module_item_id=1307340#