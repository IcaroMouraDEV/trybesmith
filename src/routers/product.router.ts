import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = Router();
const productController = new ProductController();

productRouter.post('/', productController.insert.bind(productController));
productRouter.get('/', productController.getAll.bind(productController));

export default productRouter;