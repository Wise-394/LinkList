import { SupabaseClient } from '@supabase/supabase-js';
import { User } from '../../../../types/types';

export async function updateUserInfo(supabase: SupabaseClient, user: User) {
  try {
    const { data, error } = await supabase
      .from('users')
      .update({
        name: user.name,
        bio: user.bio,
        photoUrl: user.photoUrl,
        coverPhotoUrl: user.coverPhotoUrl,
      })
      .eq('id', user.id)
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (error) {}
}
