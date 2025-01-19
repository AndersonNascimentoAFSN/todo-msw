import { ITodo } from '@/http/getTodo'
import { http, HttpResponse } from 'msw'

const todos = [
  {
    id: '1',
    title: 'Do the laundry',
    description: 'Wash the clothes and fold them'
  },
  {
    id: '2',
    title: 'Walk the dog',
    description: 'Take the dog for a walk in the park',
  }
]

type Params = never
type RequestBody = never

export const handlers = [
  http.get<Params, RequestBody, ITodo[]>(
    '*/todo',
    () => {
      return HttpResponse.json(todos, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  ),
  http.options<Params, RequestBody, never>(
    '*/todo',
    () => {
      return HttpResponse.json(_, {
        status: 204,
      })
    }
  ),
]