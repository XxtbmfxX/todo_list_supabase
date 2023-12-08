// userService.ts
import {  PostgrestSingleResponse } from '@supabase/supabase-js';
import { supabase } from '../supabaseClient';



export async function useGetUser(userId: string): Promise<UserData | null> {
  try {
    const { data, error }: PostgrestSingleResponse<UserData> = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      throw new Error('Error al obtener los datos del usuario: ' + error.message);
    }

    return data || null;
  } catch (error:any) {
    console.error(error.message);
    return null;
  }
}
