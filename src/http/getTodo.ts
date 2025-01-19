export interface ITodo {
  id: string;
  title: string;
  description: string;
}

export async function getTodo():  Promise<ITodo[] | undefined> {
  try {
    const response = await fetch('http://localhost:3000/todos');
    const data: ITodo[] = await response.json();
    return data;
  } catch(error) {
    console.error(error);
  }
}