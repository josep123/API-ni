const mongoose = require('mongoose')

const mongoConnect =  mongoose.connect('mongodb://localhost:27017/API');
console.log("bbdd importada")

module.exports = mongoConnect