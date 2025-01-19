'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { getTodo, ITodo } from '@/http/getTodo'

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    async function fetchTodoList() {
      const todos = await getTodo()
      if (todos) {
        setTodos(todos)
      }
    }

    void fetchTodoList()
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.card}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button type="button" className={styles.button}>Remove</button>
          </div>
        ))}
      </div>
    </main>
  )
}
