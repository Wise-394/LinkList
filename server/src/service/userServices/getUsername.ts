import { SupabaseClient } from '@supabase/supabase-js';
import { AppError } from '../utils/appErrors';
import { User } from '../../../../types/types';

export async function getUsername(
  supabase: SupabaseClient,
  id: string,
): Promise<User[]> {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;

    return data;
  } catch (error) {
    console.log(error);
    throw new AppError('failed to get data');
  }
}
