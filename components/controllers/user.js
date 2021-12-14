const express = require("express")
const router = express.Router()
const {userModel} = require('../models/')


// obtenemos todos los usuarios

router.get('/usuarios', async (req, res) => 
{ const usuarios =  await userModel.find()
res.send(usuarios)}
)

console.log("controller usuario metido")

module.exports = router