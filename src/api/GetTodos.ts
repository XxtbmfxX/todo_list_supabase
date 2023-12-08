import {  PostgrestResponse } from '@supabase/supabase-js';
import { supabase } from '../supabaseClient';



export async function GetTodos(): Promise<Todo[] | null> {
  try {
    const { data, error }: PostgrestResponse<Todo> = await supabase
      .from('todos')
      .select('*');

    if (error) {
      throw new Error('Error al obtener las tareas: ' + error.message);
    }

    return data || null;
  } catch (error:any) {
    console.error(error.message);
    return null;
  }
}
