import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import loginMiddleware from '../middlewares/login.middleware';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/', loginMiddleware, loginController.insert.bind(loginController));

export default loginRouter;