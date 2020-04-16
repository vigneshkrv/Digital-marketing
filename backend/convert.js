const fs = require('fs')
const fs2 = require('fs')
const csv2json = require('csvjson-csv2json');

var csvFile = fs.readFileSync('./dataSource/products.csv').toString()
var csvFile2 = fs2.readFileSync('./dataSource/productReviews.csv').toString()
const json = csv2json(csvFile, {parseNumbers: true});
const json2 = csv2json(csvFile2, {parseNumbers: true});
fs.writeFile('./dataSource/products.json',JSON.stringify(json),function(err) {
    if(err) {
        console.log(err)
    }
})

fs.writeFile('./dataSource/productReviews.json',JSON.stringify(json2),function(err) {
    if(err) {
        console.log(err)
    }
})