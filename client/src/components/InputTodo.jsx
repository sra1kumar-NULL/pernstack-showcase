import React from "react";
export const InputTodo = ({ onSubmitForm, description, setDescription }) => {
  return (
    <>
      <h1 className="text-center mt-5">Pern Stack Todos</h1>
      <form className="d-flex mt-5 px-2 gap-4 ms-2" onSubmit={onSubmitForm}>
        <input
          autoFocus
          type="text"
          className="form-control p-3 input-group input-group-sm"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Type some todos"
        />
        <button className="btn btn-success px-6">Add</button>
      </form>
    </>
  );
};
