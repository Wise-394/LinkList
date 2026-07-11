import { NextFunction, Request, Response } from 'express';
import { updateUsername } from '../service/userServices/updateUsername';

//TODO VALIDATION
export async function claimUsername(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const username = req.body.username;

  try {
    const data = await updateUsername(username, req.supabase!, req.user!);
    return res.json({ username: data });
  } catch (error) {
    return next(error);
  }
}
