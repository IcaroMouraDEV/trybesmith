import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IUser } from '../interfaces/user.interface';

export default async function UserMiddleware(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object<IUser>({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  const regex = (text: string) => /required/.test(text);

  const { error } = schema.validate(req.body);

  if (error) {
    if (regex(error.message)) return res.status(400).json({ message: error.message });
    return res.status(422).json({ message: error.message });
  }

  next();
}