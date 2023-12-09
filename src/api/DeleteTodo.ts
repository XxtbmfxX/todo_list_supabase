// DeleteTodo.ts
import { supabase } from '../supabaseClient';

export async function DeleteTodo(id: string): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error('Error al eliminar tarea: ' + error.message);
    }

    if (data) {
      return "Eliminado correctamente";
    } else {
      throw new Error('No se pudo encontrar la tarea para eliminar');
    }
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}
