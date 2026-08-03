import { SupabaseClient } from '@supabase/supabase-js';
import { AppError } from '../utils/appErrors';
import { User } from '../../../../types/types';

export async function getUser(
  supabase: SupabaseClient,
  id: string,
): Promise<User | null> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    // PGRST116 means no row found
    if (error.code === 'PGRST116') {
      return null;
    }

    console.log(
      'supabase error code:',
      error.code,
      'message:',
      error.message,
      'details:',
      error.details,
    );
    throw new AppError('failed to get data');
  }

  return data;
}
