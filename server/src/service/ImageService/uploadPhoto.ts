import { SupabaseClient } from '@supabase/supabase-js';
import { AppError } from '../utils/appErrors';

interface Params {
  supabase: SupabaseClient;
  userID: string;
  file: Express.Multer.File;
  type: 'profile-photo' | 'cover-photo';
}

export async function uploadPhoto({ supabase, userID, file, type }: Params) {
  try {
    const ext = file.mimetype.split('/')[1];
    const { data, error } = await supabase.storage
      .from(type)
      .upload(`${userID}/avatar.${ext}`, file.buffer);

    if (error) throw error;

    return data.fullPath;
  } catch (error) {
    console.log(error);
    throw new AppError('failed to uplaod profile photo');
  }
}
