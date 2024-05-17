import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";
const ToDoItems = ({ todoItems }) => {
  return (
    <div className={styles.text}>
      {todoItems.map((item) => (
        <ToDoItem toDoDate={item.dueDate} toDoName={item.name} />
      ))}
    </div>
  );
};

export default ToDoItems;
