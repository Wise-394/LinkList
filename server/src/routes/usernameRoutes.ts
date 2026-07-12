import { Router } from 'express';
import { requireAuth } from '../service/utils/requireAuth';
import { claimUsername } from '../controller/usernameController';
import { validateUsername } from '../controller/validation/validateUsername';
import { handleValidationResult } from '../controller/validation/handleValidationErrors';

export const usernameRouter = Router();

usernameRouter.post(
  '/',
  requireAuth,
  validateUsername,
  handleValidationResult,
  claimUsername,
);
