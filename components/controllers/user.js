const {Router} = require("express");
const {User} = require('../models/');
const userRouter = Router();


// obtenemos todos los usuarios


userRouter.get('/', async (req, res) => 
{ const usuarios =  await User.find()
res.json(usuarios)}

)
/*

//  obtenemos un usario por id

router.get('/usuarios', async (req, res) => 
{ const usuarios =  await userModel.find()
res.json(usuarios)}
)

// obtenemos un usuario por nombre

router.get('/usuarios', async (req, res) => 
{ const usuarios =  await userModel.find()
res.json(usuarios)}
)


// actualizamos un usuario

router.get('/usuarios', async (req, res) => 
{ const usuarios =  await userModel.find()
res.json(usuarios)}
)


// Creamos un usuario

router.get('/usuarios', async (req, res) => 
{ const usuarios =  await userModel.find()
res.json(usuarios)}
)


// Borramos


router.get('/usuarios', async (req, res) => 
{ const usuarios =  await userModel.find()
res.json(usuarios)}
)

*/

exports.userRouter = userRouter;