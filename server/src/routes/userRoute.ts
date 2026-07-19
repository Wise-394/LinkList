import { Router } from 'express';
import { requireAuth } from '../controller/authentication/requireAuth';
import { claimUsername } from '../controller/username/usernameController';
import { validateUsername } from '../controller/validation/validateUsername';
import { handleValidationResult } from '../controller/validation/handleValidationErrors';
import { upload } from '../config/multer';
import { updateUserInfoController } from '../controller/username/userInfoController';

export const userRouter = Router();

userRouter.post(
  '/',
  requireAuth,
  validateUsername,
  handleValidationResult,
  claimUsername,
);

userRouter.put(
  '/:userID',
  requireAuth,
  upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 },
  ]),
  updateUserInfoController,
);
