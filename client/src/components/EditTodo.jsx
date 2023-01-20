import React from "react";
import { useState } from "react";
export const EditTodo = ({ todo, fetchTodos }) => {
  const [editedDescription, setEditedDescription] = useState(todo.description);
  async function updateTodo(e) {
    e.preventDefault();
    const id = e.target.value;
    console.log(id);
    console.log(editedDescription);
    const body = { description: editedDescription };
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    window.location = "/";
  }
  return (
    <>
      {" "}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Todo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type={"text"}
                autoFocus
                value={editedDescription}
                className="form-control"
                onChange={(e) => setEditedDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                value={todo.todo_id}
                onClick={updateTodo}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
