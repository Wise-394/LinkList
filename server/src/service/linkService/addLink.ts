import console from 'node:console';
import { AppError } from '../utils/appErrors';
import { SupabaseClient } from '@supabase/supabase-js';
import { NewLink } from '../../../../types/types';

export async function addLink(
  supabase: SupabaseClient,
  linkItems: Array<NewLink>,
) {
  try {
    const { data, error } = await supabase
      .from('link')
      .insert(linkItems)
      .select();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error(error);
    throw new AppError('Failed to add link');
  }
}
