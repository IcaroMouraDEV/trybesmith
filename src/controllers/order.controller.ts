import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService = new OrderService();

  async getAll(_req: Request, res: Response) {
    const products = await this.orderService.getAll();

    res.status(200).json(products);
  }
}