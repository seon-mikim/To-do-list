import React from 'react'

function Card({todo}) {

  return (
    <div key={todo.id}>
      <div>id: {todo.id}</div>
      <div>todo: {todo.title}</div>
      <div>created: {todo.createdAt}</div>
      <div>updated: {todo.updatedAt}</div>
      <div>{todo.done.toString()}</div>
      <div>priority: {todo.order}</div>
    </div>
  )
}

export default Card