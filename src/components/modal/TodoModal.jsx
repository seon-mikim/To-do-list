import React from "react";
import TodoInput from "../input/TodoInput";
import { useQueryClient, useMutation } from "react-query";
import { createTodo } from "../../api/todoApi";

function TodoModal() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <div>
      <TodoInput mutate={mutate} />
    </div>
  );
}

export default TodoModal;
