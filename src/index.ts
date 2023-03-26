import express, { Express } from 'express';
import { userController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repo';
import { UserService } from './services/user.svc';

const app: Express = express();
const port = process.env.PORT ?? 3001;


const usersRepository = new UserRepository();
const usersService = new UserService(usersRepository);
app.get('/users', userController(usersService));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});