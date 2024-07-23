import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "Line-through" : "" }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="categoria">({todo.category})</p>
      </div>
      <div>
        <button className='Complete' onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className='Remove' onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  )
}

export default Todo