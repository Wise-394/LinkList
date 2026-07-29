import { SupabaseClient } from '@supabase/supabase-js';
import { AppError } from '../utils/appErrors';
import sharp from 'sharp';

interface Params {
  supabase: SupabaseClient;
  userID: string;
  file: Express.Multer.File;
  type: 'profile-photo' | 'cover-photo';
}

export async function uploadPhoto({ supabase, userID, file, type }: Params) {
  try {
    // convert image to webp
    const webpBuffer = await sharp(file.buffer)
      .webp({ quality: 80 })
      .toBuffer();

    const path = `${userID}/picture.webp`;

    const { error } = await supabase.storage
      .from(type)
      .upload(path, webpBuffer, {
        contentType: 'image/webp',
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
