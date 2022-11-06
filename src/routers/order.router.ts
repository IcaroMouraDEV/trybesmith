import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import auth from '../middlewares/auth.middleware';
import order from '../middlewares/order.middleware';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get('/', orderController.getAll.bind(orderController));
orderRouter.post('/', auth, order, orderController.insert.bind(orderController));

export default orderRouter;