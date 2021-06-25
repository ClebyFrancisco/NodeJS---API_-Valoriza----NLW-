import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentsController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUsercontoller } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();


const createUserController = new CreateUsercontoller();
const createTagController = new CreateTagController();
const authenticateUsercontroller = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle);
router.post('/login', authenticateUsercontroller.handle);
router.post('/compliments', createComplimentController.handle);


export { router };
