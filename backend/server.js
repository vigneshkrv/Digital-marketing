const { Client } = require('pg');

const data = require('./dataSource/1429_1.json')
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

var conn_string = "pg://postgres:root@127.0.0.1:5432/postgres";

var conn = new Client(conn_string)


conn.connect((err) => console.log(err))

// conn.query("CREATE DATABASE AMAZON_REVIEWS")

conn.end()

conn_string = "pg://postgres:root@127.0.0.1:5432/amazon_reviews";

conn = new Client(conn_string)

conn.connect((err) => console.log(err))

conn.query(`CREATE TABLE public.product_reviews
(
    id text COLLATE pg_catalog."default",
    name text COLLATE pg_catalog."default",
    asins text COLLATE pg_catalog."default",
    brand text COLLATE pg_catalog."default",
    categories text COLLATE pg_catalog."default",
    manufacturer text COLLATE pg_catalog."default",
    reviews_date text,
    reviews_didpurchase text,
    reviews_dorecommend boolean,
    reviews_id text COLLATE pg_catalog."default",
    reviews_numhelpful integer,
    reviews_rating double precision,
    reviews_sourceurls text COLLATE pg_catalog."default",
    reviews_text text COLLATE pg_catalog."default",
    reviews_title text COLLATE pg_catalog."default",
    reviews_usercity text COLLATE pg_catalog."default",
    reviews_username text COLLATE pg_catalog."default"
)
`)

// var query = `INSERT INTO public.product_reviews(
//     id, name, asins, brand, categories, manufacturer, reviews_date, reviews_didpurchase, reviews_dorecommend, reviews_id, reviews_numhelpful, reviews_rating, reviews_sourceurls, reviews_text, reviews_title, reviews_usercity, reviews_username)
//     VALUES ('${element.id}', '${element.name}', '${element.asins}', '${element.brand}', '${element.categories}','${element.manufacturer}','${element["reviews.date"]}','${element["reviews.didPurchase"]}','${element["reviews.doRecommend"]}', '${element["reviews.id"]}', '${element["reviews.numHelpful"]}', '${element["reviews.rating"]}', '${element["reviews.sourceURLs"]}', '${element["reviews.text"]}', '${element["reviews.title"]}', '${element["reviews.userCity"]}', '${element["reviews.username"]}');`;
// console.log(query)

data.forEach(element => {
    var query = `INSERT INTO public.product_reviews(
        id, name, asins, brand, categories, manufacturer, reviews_date, reviews_didpurchase, reviews_dorecommend, reviews_id, reviews_numhelpful, reviews_rating, reviews_sourceurls, reviews_text, reviews_title, reviews_usercity, reviews_username)
        VALUES ('${element.id}', '${element.name}', '${element.asins}', '${element.brand}', '${element.categories}','${element.manufacturer}','${element["reviews.date"]}','${element["reviews.didPurchase"]}','${element["reviews.doRecommend"]}', '${element["reviews.id"]}', '${element["reviews.numHelpful"]}', '${element["reviews.rating"]}', '${element["reviews.sourceURLs"]}', '${element["reviews.text"]}', '${element["reviews.title"]}', '${element["reviews.userCity"]}', '${element["reviews.username"]}');`;
    //console.log(query)
    conn.query(query).catch(err => console.log())
});

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())

var router = express.Router()
router.route('/dashboard').get(function (req, res) {
    res.json(data)
})

app.use("/api", router)
app.listen(4000)