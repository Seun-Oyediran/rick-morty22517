const express = require('express')
const expressLayouts = require('express-ejs-layouts')
require('dotenv').config()
const path = require('path')
const app = express()

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))



app.use('/', require('./routes'))



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`W, Server running on PORT ${PORT}`);
})