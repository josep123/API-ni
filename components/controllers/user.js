const {Router} = require("express");
const {User} = require('../models/');
const userRouter = Router();


// Todos los usuarios


userRouter.get('/', async (req, res) => { 
    User.find((error, success) => {
    if(error){
        res.status(500).json({error: "No se puede conectar a la base de datos"});
    } else {
        res.json(success);
    }
})})

// Busqueda por ID

userRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    User.findById(id, {}, {}, (error, success) => {
        if(error) {
            res.status(500).json({error: error.message});
        } else if (!success) {
            res.status(404).send();
        } else {
            res.json(success)
        }
    })
})





exports.userRouter = userRouter;