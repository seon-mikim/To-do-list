import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { createTodo } from '../../api/todoApi'

function TodoInput() {
  const { mutate, isLoading, error } = useMutation(createTodo)

  const [todo, setTodo] = useState({title: ''})
  // input 일회성 redux 안쓰고 컨포넌트 hook ?? 훅 안쓰는 방법 => hook 비효율  다른 방법 찾기 => keyword 
  const onChange = (e) => {
    const {name, value} = e.target
    setTodo({...todo, [name]: value})
  }

  return (
    <div>
        <input name="title" value={todo.title} onChange={onChange}/>
        <button type='button' onClick={()=> mutate(todo)}>add</button>
    </div>
  )
}

export default TodoInput