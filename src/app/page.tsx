'use client'

import { use, useEffect, useState } from 'react'
import styles from './page.module.css'
import { getTodo, ITodo } from '@/http/getTodo'

// const todosPromise = getTodo();

export default function Home() {
  // const todos = use(todosPromise)
  // console.log('todos', todos)

  // const todos = [{
  //   id: '1',
  //   title: 'Do the laundry',
  //   description: 'Wash the clothes and fold them'
  // }]

  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    getTodo().then((data) => {
      if (data) {
        setTodos(data)
      }
    })
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {todos?.map((todo) => (
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
