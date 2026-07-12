import { SupabaseClient } from '@supabase/supabase-js';
import { AppError } from '../utils/appErrors';

export async function getUsername(supabase: SupabaseClient, id: string) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    if (error) new AppError('Could not get username');

    return data;
  } catch (error) {
    throw error;
  }
}
