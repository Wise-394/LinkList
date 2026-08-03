import { Router } from 'express';
import { requireAuth } from '../controller/authentication/requireAuth';

import { upload } from '../config/multer';
import {
  getUserInfoController,
  updateUserInfoController,
} from '../controller/username/userInfoController';
import { publicSupabase } from '../controller/authentication/publicSupabase';

export const userRouter = Router();

userRouter.get('/:userID', publicSupabase, getUserInfoController);

userRouter.put(
  '/:userID',
  requireAuth,
  upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 },
  ]),
  updateUserInfoController,
);
