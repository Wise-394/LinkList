import { NextFunction, Request, Response } from 'express';
import { updateUsername } from '../../service/userServices/updateUsername';
import { getUser } from '../../service/userServices/getUser';

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
    if (!req.params.userID) {
      return res.status(400).json({ error: 'invalid id' });
    }
    const userID = req.params.userID as string;
    const user = await getUser(req.supabase!, userID);

    return res.json(user?.username ?? null);
  } catch (error) {
    return next(error);
  }
}
