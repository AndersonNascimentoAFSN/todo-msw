export interface ITodo {
  id: string;
  title: string;
  description: string;
}

export async function getTodo():  Promise<ITodo[] | undefined> {
  try {
    const response = await fetch('https://6331c51ecff0e7bf70f62b2c.mockapi.io/todo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    const data: ITodo[] = await response.json();
    return data;
  } catch(error) {
    console.error(error);
  }
}