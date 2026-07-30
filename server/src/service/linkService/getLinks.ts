import { SupabaseClient } from '@supabase/supabase-js';
import { AppError } from '../utils/appErrors';
import { Link } from '../../../../types/types';

export async function getLinks(
  supabase: SupabaseClient,
  userID: string,
): Promise<Array<Link>> {
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
