import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentsController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUsercontoller } from './controllers/CreateUserController';
import { ListTagController } from './controllers/ListTagController';
import { ListUserReceiveComplimentscontroller } from './controllers/ListUserReceiveComplimentscontroller';
import { ListUserSendComplimentscontroller } from './controllers/ListUserSendComplimentscontroller';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';

const router = Router();


const createUserController = new CreateUsercontoller();
const createTagController = new CreateTagController();
const authenticateUsercontroller = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentscontroller();
const listUserSendComplimentsController = new ListUserSendComplimentscontroller();
const listTagsController = new ListTagController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle);
router.post('/login', authenticateUsercontroller.handle);
router.post('/compliments', ensureAuthenticate, createComplimentController.handle);
router.get('/user/compliments/send', ensureAuthenticate, listUserSendComplimentsController.handle);
router.get('/user/compliments/receive', ensureAuthenticate, listUserReceiveComplimentsController.handle);
router.get('/tags', ensureAuthenticate, listTagsController.handle)

export { router };
