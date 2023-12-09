import { supabase } from '../supabaseClient';


export async function PostTodo(newTodo: string, userId: string | undefined): Promise<Todo | null> {
  try {
    const { data, error } = await supabase
      .from('todos')
      .insert({ user_id: userId, task:newTodo });

    if (error) {
      throw new Error('Error al crear la tarea: ' + error.message);
    }

    return data ? data[0] : null;
  } catch (error:any) {
    console.error(error.message);
    return null;
  }
}
