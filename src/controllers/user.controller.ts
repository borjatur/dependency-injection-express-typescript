import { Request, Response } from 'express';
import { IUserService } from '../interfaces/user.interface';

export const userController = (userService: IUserService) => (req: Request, res: Response) => {
  const users = userService.getUsers()
  res.send(users);
};