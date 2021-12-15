const {Router} = require("express");
const {User} = require('../models/');
const userRouter = Router();




// Mostramos todos los usuarios

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




// Creamos un usuario

userRouter.post('/create', async (req, res) => {
    const body = req.body;
    const user = new User(body);
    user.save(( error, success ) => {
        if (error) {
            res.status(500).json({error: error.message});
        } else {
            res.status(201).json(success);
        }
    });
})





// Actualizamos un usuario mediante su ID

userRouter.patch('/patch/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;

    User.findByIdAndUpdate(id, body, {new: true}, ( error, success ) => {
       if(error) {
           res.status(500).json({error: error.message});
       } else if (!success) {
           res.status(404);
       } else {
           res.status(204).send();
       }
    })
})




// Borramos un usuario

userRouter.delete('/delete/:id', (req,res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id, {}, ( error, success ) => {
        if(error) {
            res.status(500).json({error: error.message});
        } else if (!success) {
            res.status(404);
        } else {
            res.status(205).send();
        }
    })
})



exports.userRouter = userRouter;