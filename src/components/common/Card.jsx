import React, { useState } from "react";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { getTodos, updateTodo } from "../../api/todoApi";
import TodoInput from "../input/TodoInput";

function Card({ initialTodo, onDelete }) {
  // initialTodo -> (id) todo id

  const { data: todo } = useQuery("todos", getTodos, {
    select: (todos) => todos.find((todo) => todo.id === initialTodo.id),
  });


  const [onEdit, setOnEdit] = useState(false);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateTodo, {
    onSuccess: (todoResponse) => {
      queryClient.setQueriesData(
        [`todos-${initialTodo.id}`, initialTodo.id],
        todoResponse
      );
      queryClient.invalidateQueries("todos");

      setOnEdit(false);
    },
  });

  const onShowEditInput = () => {
    setOnEdit(!onEdit);
  };

  return (
    <div key={initialTodo.id}>
      <div>id: {initialTodo.id}</div>
      {onEdit ? (
        <TodoInput mutate={mutate} initialValue={todo} />
      ) : (
        <div>todo: {todo.title}</div>
      )}
      <div>created: {todo.createdAt}</div>
      <div>updated: {todo.updatedAt}</div>
      <div>priority: {todo.order}</div>
      <div>
        {onEdit ? (
          <button onClick={onShowEditInput}>cancel</button>
        ) : (
          <button onClick={onShowEditInput}>edit</button>
        )}

        <button onClick={onDelete}>del</button>
      </div>
    </div>
  );
}

export default Card;
