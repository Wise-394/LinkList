import { SupabaseClient } from '@supabase/supabase-js';
import { AppError } from '../utils/appErrors';
import { Link } from '../../../../types/types';

export async function deleteLink(
  supabase: SupabaseClient,
  linkID: number,
): Promise<Link> {
  try {
    const { error, data } = await supabase
      .from('link')
      .delete()
      .eq('id', linkID)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    throw new AppError('failed to delete');
  }
}
