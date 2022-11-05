import { Router } from 'express';
import orderRouter from './order.router';
import productRouter from './product.router';
import userRouter from './user.router';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

export default router;