const { Client } = require('pg');

const data = require('./dataSource/products.json')
const review = require('./dataSource/productReviews.json')
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

var conn_string = "pg://postgres:root@127.0.0.1:5432/product";
var conn_string_2 = "pg://postgres:root@127.0.0.1:5432/product_reviews"
var conn = new Client(conn_string)
var conn2 = new Client(conn_string_2)

conn.connect()
conn2.connect()

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())

var router = express.Router()
router.route('/dashboard').get(function (req, res) {
    conn.query(`SELECT * FROM public.product_data`).then((x)=>{
        res.json(x.rows);
    })
})

router.route('/charts').get(function (req,res) {
    conn2.query(`SELECT * FROM public.product_review_data`).then((x)=>{
        res.json(x.rows);
    })
})

router.route('/product').get(function(req,res) {
    conn.query(`SELECT * FROM public.product_data`).then((x)=>{
        res.json(x.rows.filter((y)=>{
           return y.asin==req.query.asin
        }));
    })
})

app.use("/api", router)
app.listen(4300)