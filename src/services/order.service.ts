import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel = new OrderModel();

  async getAll() {
    const orders = await this.orderModel.getAll();

    return orders;
  }

  async insert(userId: number) {
    const newOrder = await this.orderModel.insert(userId);

    return newOrder;
  }
}