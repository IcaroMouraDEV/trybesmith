import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserMiddleware from '../middlewares/user.middleware';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', UserMiddleware, userController.insert.bind(userController));

export default userRouter;