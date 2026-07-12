import { NextFunction, Request, Response } from 'express';
import { updateUsername } from '../service/userServices/updateUsername';
import { getUsername } from '../service/userServices/getUsername';

export async function claimUsername(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const username = req.body.username;

  try {
    const data = await updateUsername(username, req.supabase!, req.user!);
    return res.json({ username: data.username });
  } catch (error) {
    return next(error);
  }
}

export async function getUsernameController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const username = getUsername(req.supabase!, req.user?.id!);
    return res.json(username);
  } catch (error) {
    return next(error);
  }
}
