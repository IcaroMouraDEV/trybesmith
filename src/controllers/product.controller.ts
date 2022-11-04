import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  productService = new ProductService();

  async insert(req: Request, res: Response) {
    // const productData = this.productService.validateParams(req.body);
    const product = await this.productService.insert(req.body);

    res.status(201).json(product);
  }
}