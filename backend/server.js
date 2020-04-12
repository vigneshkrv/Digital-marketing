// const { Client } = require('pg');
const data = require('./dataSource/1429_1.json')
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())

var router = express.Router()
router.route('/dashboard').get(function(req, res){
    res.json(data)
})

app.use("/api",router)
app.listen(4000)