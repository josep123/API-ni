const {userRouter} = require('./user');
const {Router} = require('express');
const appRouter = Router();

appRouter.use("/user", userRouter);

module.exports = appRouter;