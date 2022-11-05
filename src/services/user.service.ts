import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';
import UserModel from '../models/user.model';

export default class UserService {
  userModel = new UserModel();

  async insert(user: IUser) {
    const newUser = await this.userModel.insert(user);

    const token = jwt.sign(
      {
        id: newUser.id,
        user: newUser.username,
      },
      process.env.JWT_SECRET as string,
    );

    return token;
  }
}