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
    const path = `${userID}/avatar.${ext}`;

    const { error } = await supabase.storage
      .from(type)
      .upload(path, file.buffer, {
        contentType: file.mimetype,
        upsert: true,
      });

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage
      .from(type)
      .getPublicUrl(path);

    return publicUrlData.publicUrl;
  } catch (error) {
    console.log(error);
    throw new AppError('failed to uplaod profile photo');
  }
}
