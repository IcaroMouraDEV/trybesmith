import { ResultSetHeader } from 'mysql2';
import { IUser, IuserId } from '../interfaces/user.interface';
import connection from './connection';

export default class UserModel {
  connection = connection;

  async insert(user: IUser): Promise<IuserId> {
    const sql = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)';

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(sql, [user.username, user.classe, user.level, user.password]);

    const newUser: IuserId = {
      id: insertId,
      ...user,
    };

    return newUser;
  }
}