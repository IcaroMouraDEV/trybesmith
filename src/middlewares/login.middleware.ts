import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { ILogin } from '../interfaces/login.interface';

export default async function loginMiddleware(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object<ILogin>({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
}