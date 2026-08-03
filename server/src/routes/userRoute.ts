import { Router } from 'express';
import { requireAuth } from '../controller/authentication/requireAuth';

import { upload } from '../config/multer';
import {
  getUserInfoController,
  updateUserInfoController,
} from '../controller/username/userInfoController';

export const userRouter = Router();

userRouter.get('/:userID', requireAuth, getUserInfoController); //fix this to no longer require auth

userRouter.put(
  '/:userID',
  requireAuth,
  upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 },
  ]),
  updateUserInfoController,
);
