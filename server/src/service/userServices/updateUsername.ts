import { SupabaseClient, User } from '@supabase/supabase-js';
import { AppError } from '../utils/appErrors';

export async function updateUsername(
  username: string,
  supabase: SupabaseClient,
  user: User,
) {
  const { data, error } = await supabase
    .from('users')
    .update({ username })
    .eq('id', user.id)
    .select()
    .single();

  if (error) {
    throw new AppError('Could not update username');
  }

  return data;
}
