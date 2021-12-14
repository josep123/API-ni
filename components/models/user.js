const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema ({
    usuario: String,
    nombre: String,
    email: String,
})

console.log('model metido')

module.exports = mongoose.model("User", userSchema);