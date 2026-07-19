import { SupabaseClient } from '@supabase/supabase-js';
import { AppError } from '../../utils/appErrors';

export async function uploadProfilePhoto(
  supabase: SupabaseClient,
  userID: string,
  file: Express.Multer.File,
) {
  try {
    const ext = file.mimetype.split('/')[1];
    const { data, error } = await supabase.storage
      .from('profile-photo')
      .upload(`${userID}/avatar.${ext}`, file.buffer);

    if (error) throw error;

    return data;
  } catch (error) {
    console.log(error);
    throw new AppError('failed to uplaod profile photo');
  }
}
