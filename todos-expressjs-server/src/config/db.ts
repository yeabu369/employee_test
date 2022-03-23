import { Todo } from '../modules/todos/model';
import { uuid } from 'uuidv4';

// using array to store todos instead of database for convenience
export const todosArray: Todo[] = [
  {
    _id: uuid(),
    text: 'Todo 1',
    completed: false,
  },
  {
    _id: uuid(),
    text: 'Todo 2',
    completed: false,
  },
  {
    _id: uuid(),
    text: 'Todo 3',
    completed: false,
  },
  {
    _id: uuid(),
    text: 'Todo 4',
    completed: false,
  },
];
