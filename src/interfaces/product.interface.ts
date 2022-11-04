export interface IProduct {
  name: string,
  amount: string,
}

export interface IProductId extends IProduct {
  id: number,
}