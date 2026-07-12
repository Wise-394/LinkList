import { Request, Response, NextFunction } from 'express';
import { getSupabaseClient } from '../../config/supabase';

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  //check auth
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'error invalid authentication' });
  }

  //get client
  const token = authHeader.replace('Bearer ', '');
  const supabase = getSupabaseClient(token);

  const { error, data } = await supabase.auth.getUser();
  if (error || !data.user) {
    return res.status(401).json({ error: 'error invalid authentication' });
  }

  //put to req
  req.supabase = supabase;
  req.user = data.user;
  next();
}
