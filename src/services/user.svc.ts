import { IUserRepository, IUserService } from "../interfaces/user.interface";

export class UserService implements IUserService {
  usersRepository: IUserRepository;

  constructor(usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  };

  getUsers() {
    return this.usersRepository.find()
  };

  saveUsers(user: any) {
    return this.usersRepository.save(user)
  }
};