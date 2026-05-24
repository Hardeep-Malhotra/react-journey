import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 py-8">
      <h1 className="text-4xl font-extrabold text-white text-center">
        Redux Toolkit <span className="text-indigo-500">Todo</span>
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
