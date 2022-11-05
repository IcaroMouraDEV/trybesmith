import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel = new OrderModel();

  async getAll() {
    const products = await this.orderModel.getAll();

    return products;
  }
}