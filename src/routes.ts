import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUsercontoller } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();


const createUserController = new CreateUsercontoller();
const createTagController = new CreateTagController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle)


export { router };
