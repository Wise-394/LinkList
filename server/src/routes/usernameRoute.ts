import { Router } from 'express';
import { requireAuth } from '../controller/authentication/requireAuth';
import { validateUsername } from '../controller/validation/validateUsername';
import { handleValidationResult } from '../controller/validation/handleValidationErrors';
import {
  claimUsername,
  getUsernameController,
} from '../controller/username/usernameController';
import { publicSupabase } from '../controller/authentication/publicSupabase';

export const usernameRouter = Router();

usernameRouter.get('/:userID', publicSupabase, getUsernameController);

usernameRouter.post(
  '/',
  requireAuth,
  validateUsername,
  handleValidationResult,
  claimUsername,
);
