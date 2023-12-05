import { Router } from 'express';

import { Add, Edit, Delete, List } from '../controllers/userController.js';

const userRoute = Router();

userRoute.post('/user/add', Add);
userRoute.post('/user/edit', Edit);
userRoute.post('/user/delete', Delete);
userRoute.get('/user/list', List);

export default userRoute;
