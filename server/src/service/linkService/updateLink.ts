import console from 'node:console';
import { AppError } from '../utils/appErrors';
import { SupabaseClient } from '@supabase/supabase-js';
import { Link } from '../../../../types/types';

export async function updateLink(supabase: SupabaseClient, updateLink: Link) {
  try {
    const { data, error } = await supabase
      .from('link')
      .update({
        label: updateLink.label,
        url: updateLink.url,
        icon: updateLink.icon,
        order: updateLink.order,
      })
      .eq('id', updateLink.id)
      .select()
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error(error);
    throw new AppError('Failed to update link');
  }
}
