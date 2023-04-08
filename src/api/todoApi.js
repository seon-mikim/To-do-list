import { instance } from "../../axios/axios";

export const getTodos = async () => {
  const response = await instance.get("/todos");
  return response.data;
};

/*
    export const getTodo = async(id) => {
        const response = await getTodos();
        return response.find(todos => todo.id === id)
    }
*/

export const createTodo = async (todo) => {
  const response = await instance.post("/todos", todo);
  return response.data;
};

export const updateTodo = async ({ todo, id }) => {
  const response = await instance.put(`/todos/${id}`, todo);
  
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await instance.delete(`/todos/${id}`);
  return response.data;
};
