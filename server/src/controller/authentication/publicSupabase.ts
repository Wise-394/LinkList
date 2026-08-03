import { Request, Response, NextFunction } from 'express';
import { supabaseServer } from '../../config/supabaseServer';

export function publicSupabase(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  req.supabase = supabaseServer;
  next();
}
