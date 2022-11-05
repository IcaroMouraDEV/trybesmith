import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRouter = Router();
const userController = new UserController();

// userRouter.post('/', userController.insert.bind(UserController));
userRouter.post('/', (req, res) => userController.insert(req, res));
// userRouter.get('/', userController.getAll.bind(UserController));

export default userRouter;