export interface IOrder {
  id: number,
  userId: number,
  productsIds?: number[],
}

export interface IOrderReq {
  productsIds: number[],
}