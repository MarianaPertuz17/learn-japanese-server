import { Router } from "express";
import userRouter from "./user";

const rootRouter = Router();

rootRouter.use('/users', userRouter);

//Error
rootRouter.get('*', (req, res) => {
  res.status(404).send('These are not the routes you are looking for');
});

module.exports = rootRouter;