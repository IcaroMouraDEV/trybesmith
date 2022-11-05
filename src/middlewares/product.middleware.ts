import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IProduct } from '../interfaces/product.interface';

export default async function ProductMiddleware(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object<IProduct>({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const regex = (text: string) => /required/.test(text);

  const { error } = schema.validate(req.body);

  if (error) {
    if (regex(error.message)) return res.status(400).json({ message: error.message });
    return res.status(422).json({ message: error.message });
  }

  next();
}