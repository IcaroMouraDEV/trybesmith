import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/orders.interface';
import connection from './connection';

export default class OrderModel {
  connection = connection;

  async getAll(): Promise<IOrder[]> {
    const sql = `
      SELECT o.id, o.userId, JSON_ARRAYAGG(p.id)
      AS productsIds
      FROM Trybesmith.Orders o
      INNER JOIN Trybesmith.Products p
      ON p.orderId = o.id
      GROUP BY o.id;`;

    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(sql);

    return rows;
  }
}