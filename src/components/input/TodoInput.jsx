import React, { useState } from 'react'


function TodoInput({mutate, initialValue={title: ''}}) {
  const [todo, setTodo] = useState(initialValue)
  // input 일회성 redux 안쓰고 컨포넌트 hook ?? 훅 안쓰는 방법 => hook 비효율  다른 방법 찾기 => keyword 
  const onSubmit = () => {
  initialValue.id?  mutate({todo:todo , id:initialValue.id}): mutate(todo)
  
  setTodo(initialValue)
  }
  const onChange = (e) => {
    const {name, value} = e.target
    setTodo({...todo, [name]: value})
  }

  return (
    <div>
        <input name="title" value={todo.title} onChange={onChange}/>
        <button type='button' onClick={onSubmit}>edit</button>
    </div>
  )
}

export default TodoInput