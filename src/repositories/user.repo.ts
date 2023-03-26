import { IUserRepository } from '../interfaces/user.interface';

export class UserRepository implements IUserRepository {
  find() {
    return Promise.resolve([
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv'
      }
    ]);
  };
};