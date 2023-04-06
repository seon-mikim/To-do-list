import { instance } from '../axios/axios'


export const getTodos = async() => {
    const response = await instance.get('/todos')
    return response.data
}

export const getTodo = async(id) => {
    const response = await instance.get(`/todos${id}`)
    return response.data
}

export const createTodo = async(todo) => {
    const response = await instance.post('/todos', todo)
    return response.data
}

export const updateTodo = async({todo, id}) => {
    const response = await instance.put(`/todos${id}`, todo)
    return response.data
}

export const deleteTodo = async({todo, id}) => {
    const response = await instance.post(`/todos${id}`)
    return response.data
}