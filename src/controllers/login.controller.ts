import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  loginService = new LoginService();

  async insert(req: Request, res: Response) {
    const regex = (text: string) => /invalid/.test(text);
    const token = await this.loginService.createToken(req.body);

    if (regex(token)) return res.status(401).json({ message: token });

    res.status(200).json({ token });
  }
}