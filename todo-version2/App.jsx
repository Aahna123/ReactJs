import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import "./App.css";
import ToDoItems from "./Components/ToDoItems";

function App() {
  const todoItems = [
    {
      name: "BuyMilk",
      dueDate: "4/10/24",
    },
    {
      name: "Go To College",
      dueDate: "5/10/24",
    },
    {
      name: "Like this video",
      dueDate: "6/10/24",
    },
  ];

  return (
    <center>
      <AppName />
      <AddToDo />
      <ToDoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
