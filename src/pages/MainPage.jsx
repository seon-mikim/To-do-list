import React from 'react'
import TodoModal from '../components/modal/TodoModal'
import { useQuery } from 'react-query'
import  { getTodos } from '../api/todoApi'
import Card from '../components/common/Card'
function MainPage() {
  const {data: todos, isLoading, error} = useQuery('todos', getTodos)
  
  return (
    <div>
        <h1>Main Page</h1>
        {todos?.map((todo)=> (

          <Card todo={todo} key={todo.id}/>
        )
        )

        }
        <TodoModal/>
    </div>
  )
}

export default MainPage