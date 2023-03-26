import { UserService } from '../src/services/user.svc';
import { IUserRepository, IUser } from '../src/interfaces/user.interface';

it('user service happy path', async () => {

  const fakeUserRepository: Partial<IUserRepository> = {
    find: jest.fn(() => Promise.resolve([]))
  };

  const userService = new UserService(fakeUserRepository as IUserRepository);

  await userService.getUsers();

  expect(fakeUserRepository.find).toHaveBeenCalled();
});