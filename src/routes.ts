import { Router } from 'express';
import { CreateUsercontoller } from './controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUsercontoller();

router.post('/users', createUserController.handle)


export { router };
