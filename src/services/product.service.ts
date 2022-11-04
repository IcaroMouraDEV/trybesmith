// import Joi from 'joi';
import { IProduct } from '../interfaces/product.interface';
import ProductModel from '../models/product.model';

export default class ProductService {
  productModel = new ProductModel();

  async insert(product: IProduct) {
    const newProduct = await this.productModel.insert(product);

    return newProduct;
  }

  async getAll() {
    const products = await this.productModel.getAll();

    return products;
  }
}