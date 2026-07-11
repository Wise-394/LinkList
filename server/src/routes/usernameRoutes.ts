import { Router } from 'express';
import { requireAuth } from '../service/utils/requireAuth';
import { claimUsername } from '../controller/usernameController';

export const usernameRouter = Router();

usernameRouter.post('/', requireAuth, claimUsername);
