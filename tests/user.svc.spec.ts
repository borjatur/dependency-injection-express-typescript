import { UserService } from '../src/services/user.svc';

it('user service happy path', async () => {

  const fakeUserRepository = {
    find: jest.fn(() => Promise.resolve([]))
  }

  const userService = new UserService(fakeUserRepository);

  await userService.getUsers();

  expect(fakeUserRepository.find).toHaveBeenCalled();
});