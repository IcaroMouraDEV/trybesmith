import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IOrderReq } from '../interfaces/orders.interface';

export default async function OrderMiddleware(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object<IOrderReq>({
    productsIds: Joi.array().min(1).items(Joi.number()).required()
      .messages({ 'array.min': '"productsIds" must include only numbers' }),
  });

  const regex = (text: string) => /required/.test(text);

  const { productsIds } = req.body;
  const { error } = schema.validate({ productsIds });

  if (error) {
    if (regex(error.message)) return res.status(400).json({ message: error.message });
    return res.status(422).json({ message: error.message });
  }

  next();
}