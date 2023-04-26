const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const movieRoutes = require('./routes/movie-routes.js')

const app = express()
app.use(express.json())
app.use(movieRoutes)
dotenv.config()

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('db connection succsess') })
    .catch(() => { console.log('db connection error') })

app.listen(PORT, (eroor) => {
    eroor
        ? console.log(eroor)
        : console.log(`Server is ready ${PORT}`)
})