import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

  async insert(userId: number): Promise<IOrder> {
    const sql = 'INSERT INTO Trybesmith.Orders (userId) VALUE (?)';

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(sql, [userId]);

    const order: IOrder = {
      id: insertId,
      userId,
    };
    
    return order;
  }
}