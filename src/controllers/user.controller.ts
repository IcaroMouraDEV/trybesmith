import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  userService = new UserService();

  async insert(req: Request, res: Response) {
    const token = await this.userService.insert(req.body);

    res.status(201).json({ token });
  }
}