require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

//import routes
const authRoute = require('./routes/auth')

//route middleware
app.use('/user', authRoute)

mongoose.connect(process.env.CONNECT_DB, () => {
  console.log('Connected to MongoDB')
})

app.listen(process.env.PORT || 3000, () =>
  console.log('server started on port 3000')
)
