const fs = require('fs')
const csv2json = require('csvjson-csv2json');

var csvFile = fs.readFileSync('./dataSource/1429_1.csv').toString()

const json = csv2json(csvFile, {parseNumbers: true});

fs.writeFile('./dataSource/1429_1.json',JSON.stringify(json),function(err) {
    if(err) {
        console.log(err)
    }
})