export interface IUserService {
  getUsers: () => Promise<IUser[]>
};

export interface IUserRepository {
  find: () => Promise<IUser[]>,
  save: (user: any) => Promise<IUser>
};

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string
}