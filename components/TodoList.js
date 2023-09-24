import React, { Component, useState } from 'react'

function TodoList() {
  const todosData = [
    { id: 1, name: 'mua chỉ nha khoa', completed: false },
    { id: 2, name: 'giat do', completed: false },
  ]
  const [todos, setTodos] = useState(todosData)
  const toggleCompleted = (id) => {
    const updatedData = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedData)
  }
  return (
    <div>
      <h1>Todo-List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox' checked={todo.completed} onChange={() => toggleCompleted(todo.id)}
            />
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TodoList