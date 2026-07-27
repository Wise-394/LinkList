import { SupabaseClient } from '@supabase/supabase-js';
import { AppError } from '../utils/appErrors';

export async function deleteAllLinkOfUser(
  supabase: SupabaseClient,
  userID: string,
) {
  try {
    const { error } = await supabase.from('link').delete().eq('userID', userID);

    if (error) throw error;
  } catch (error) {
    console.log(error);
    throw new AppError('failed to delete');
  }
}
