import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  productService = new ProductService();

  async insert(req: Request, res: Response) {
    const product = await this.productService.insert(req.body);

    res.status(201).json(product);
  }

  async getAll(_req: Request, res: Response) {
    const products = await this.productService.getAll();

    res.status(200).json(products);
  }
}