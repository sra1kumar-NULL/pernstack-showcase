import { InputTodo } from "./components/InputTodo";
import { ListTodos } from "./components/ListTodos";
import { useState, useEffect } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  async function fetchTodos() {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  }
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      setDescription("");
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await fetchTodos();
    } catch (err) {
      console.error(err.message);
    }
  };
  async function deleteTodo(e) {
    const id = e.target.value;
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });
    await fetchTodos();
  }
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <InputTodo
        onSubmitForm={onSubmitForm}
        description={description}
        setDescription={setDescription}
      />
      <ListTodos
        todos={todos}
        fetchTodos={fetchTodos}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
