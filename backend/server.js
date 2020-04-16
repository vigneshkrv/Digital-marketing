const { Client } = require('pg');

const data = require('./dataSource/products.json')
const review = require('./dataSource/productReviews.json')
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

var conn_string = "pg://postgres:root@127.0.0.1:5432/postgres";

var conn = new Client(conn_string)


// conn.connect((err) => console.log(err))

// conn.query("CREATE DATABASE product").catch((err) => {
//     console.log()
// }).finally(() => {

//     console.log("de")
//    // conn.end()

//     conn_string = "pg://postgres:root@127.0.0.1:5432/product";

//     conn = new Client(conn_string)

//     conn.connect((err) => console.log(err))

//     conn.query(`CREATE TABLE public.product_data
//     (
//     asin text COLLATE pg_catalog."default",
//     brand text COLLATE pg_catalog."default",
//     title text COLLATE pg_catalog."default",
//     url text COLLATE pg_catalog."default",
//     image text,
//     rating double precision,
//     reviewUrl text COLLATE pg_catalog."default",
//     totalReviews integer,
//     price double precision,
//     originalPrice double precision
//     )
// `).catch(err => {console.log(err)})
// })

// // conn.end()



// // var query = `INSERT INTO public.product_reviews(
// //     id, name, asins, brand, categories, manufacturer, reviews_date, reviews_didpurchase, reviews_dorecommend, reviews_id, reviews_numhelpful, reviews_rating, reviews_sourceurls, reviews_text, reviews_title, reviews_usercity, reviews_username)
// //     VALUES ('${element.id}', '${element.name}', '${element.asins}', '${element.brand}', '${element.categories}','${element.manufacturer}','${element["reviews.date"]}','${element["reviews.didPurchase"]}','${element["reviews.doRecommend"]}', '${element["reviews.id"]}', '${element["reviews.numHelpful"]}', '${element["reviews.rating"]}', '${element["reviews.sourceURLs"]}', '${element["reviews.text"]}', '${element["reviews.title"]}', '${element["reviews.userCity"]}', '${element["reviews.username"]}');`;
// // console.log(query)

// data.forEach(element => {
//     var query = `INSERT INTO public.product_data(
//         asin, brand, title, url, image, rating,reviewUrl, totalReviews,price,originalPrice)
//         VALUES ('${element.asin}', '${element.brand}', '${element.title}', '${element.url}', '${element.image}','${element.rating}','${element.reviewUrl}','${element.totalReviews}','${element.price}', '${element.originalPrice}');`;
//    // console.log(query)
//     conn.query(query).catch(err => {console.log(err)})
// });

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

router.route('/reviews').get(function (req,res) {
    res.json(review)
})

app.use("/api", router)
app.listen(4000)