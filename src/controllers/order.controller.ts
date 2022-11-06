import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import ProductService from '../services/product.service';

export default class OrderController {
  orderService = new OrderService();

  productService = new ProductService();

  async getAll(_req: Request, res: Response) {
    const orders = await this.orderService.getAll();

    res.status(200).json(orders);
  }
  
  async insert(req: Request, res: Response) {
    const { user, productsIds } = req.body;
    const { id, userId } = await this.orderService.insert(user.id);
    
    await this.productService.update(id, productsIds);

    res.status(201).json({ userId, productsIds });
  }
}