import { SupabaseClient } from '@supabase/supabase-js';
import { AppError } from '../utils/appErrors';

export async function getLinks(supabase: SupabaseClient, userID: string) {
  try {
    const { data, error } = await supabase
      .from('link')
      .select('*')
      .eq('userID', userID);

    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    throw new AppError('failed to get data');
  }
}
