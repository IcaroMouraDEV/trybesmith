export interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IuserId extends IUser {
  id: number,
}