import jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces/login.interface';
import UserModel from '../models/user.model';

export default class LoginService {
  userModel = new UserModel();

  async createToken(login: ILogin) {
    const user = await this.userModel.getByUsername(login.username);

    if (!user || user.password !== login.password) {
      return 'Username or password invalid';
    }

    const token = jwt.sign(
      {
        id: user.id,
        user: user.username,
      },
      process.env.JWT_SECRET as string,
    );

    return token;
  }
}