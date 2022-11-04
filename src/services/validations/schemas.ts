import Joi from 'joi';
import IProduct from '../../interfaces/product.interface';

export const productSchema = Joi.object<IProduct>({
  name: Joi.string().required(),
  amount: Joi.string().required(),
});

export const userSchema = Joi.object<IProduct>({
  name: Joi.string().required(),
});
