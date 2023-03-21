import { Router } from 'express';

import { Add, Edit, Delete, List } from '../controllers/userController.js';

const userRoute = Router();

userRoute.post('/add', Add);
userRoute.post('/edit', Edit);
userRoute.post('/delete', Delete);
userRoute.get('/list', List);

export default userRoute;
