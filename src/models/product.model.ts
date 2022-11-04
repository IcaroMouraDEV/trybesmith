import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct, IProductId } from '../interfaces/product.interface';
import connection from './connection';

export default class ProductModel {
  connection = connection;

  async insert(product: IProduct): Promise<IProductId> {
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)';

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(sql, [product.name, product.amount]);

    const newProduct: IProductId = {
      id: insertId,
      ...product,
    };

    return newProduct;
  }

  async getAll(): Promise<IProductId[]> {
    const sql = 'SELECT * FROM Trybesmith.Products';

    const [result] = await this.connection.execute<IProductId[] & RowDataPacket[]>(sql);

    return result;
  }
}