import React from "react";
import { EditTodo } from "./EditTodo";

export const ListTodos = ({ todos, deleteTodo, fetchTodos }) => {
  return (
    <>
      <table className="table mt-3 ms-3 px-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.todo_id}>
              <th scope="row">{index}</th>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} fetchTodos={fetchTodos} />
              </td>
              <td>
                <button
                  onClick={deleteTodo}
                  className="btn btn-danger"
                  value={todo.todo_id}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
