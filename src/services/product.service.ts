// import Joi from 'joi';
import { IProduct } from '../interfaces/product.interface';
import ProductModel from '../models/product.model';
// import HttpException from '../shared/http.exception';
// import { productSchema } from './validations/schemas';

export default class ProductService {
  productModel = new ProductModel();

  async insert(product: IProduct) {
    const newProduct = await this.productModel.insert(product);

    return newProduct;
  }
}