var express = require('express')
var app = express()
var cors = require('cors')


require('dotenv').config()
require('./app_api/models/db')

app.use(express.json());
app.use(cors())
const userRoute = require('./app_api/routes/user')
app.use('/api',userRoute)

app.listen(process.env.PORT, function(){
    console.log(`app is listening to ${process.env.PORT}`)
})