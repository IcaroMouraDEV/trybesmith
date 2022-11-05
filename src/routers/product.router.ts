import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import ProductMiddleware from '../middlewares/product.middleware';

const productRouter = Router();
const productController = new ProductController();

productRouter.post('/', ProductMiddleware, productController.insert.bind(productController));
productRouter.get('/', productController.getAll.bind(productController));

export default productRouter;