import React from 'react'
import TodoModal from '../components/modal/TodoModal'
import { useQuery,useQueryClient, useMutation } from 'react-query'
import  { getTodos, deleteTodo } from '../api/todoApi'
import Card from '../components/common/Card'

function MainPage() {
  
  const queryClient = useQueryClient()
  
  const {data: todos, isLoading, error} = useQuery('todos', getTodos)
  
  const { mutate } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    }
  })


  return (
    <div>
        <h1>Main Page</h1>
        { todos?.map((todo)=> 
            (<Card initialTodo={todo} key={todo.id} onDelete={()=> mutate(todo.id)}/>))
        }
        <TodoModal/>
    </div>
  )
}

export default MainPage