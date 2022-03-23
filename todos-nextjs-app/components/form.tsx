import axios from 'axios'
import { useState } from 'react'
import Checkbox from './checkbox'

export default function Form({ reloadList }) {
  const [text, setText] = useState('')

  const createTodo = async (event) => {
    await axios({
      url: 'api/todos',
      method: 'POST',
      data: { text, completed: false },
    })
  }

  return (
    <form
      className="w-full flex items-center bg-white dark:bg-gray-800 rounded-md max-w-md mx-auto px-7 mt-7 sm:mt-12 h-10 sm:h-12 space-x-1"
      onSubmit={createTodo}
    >
      <Checkbox disabled />
      <input
        type="text"
        className="flex-1 border-none text-xs sm:text-base bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-0"
        placeholder="Create a new todo..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </form>
  )
}
