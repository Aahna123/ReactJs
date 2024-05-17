function ToDoItem({ toDoName, toDoDate }) {
  return (
    <div class="container kg-row">
      <div class="row ">
        <div class="col-6">{toDoName}</div>
        <div class="col-4">{toDoDate}</div>
        <div class="col-2">
          <button type="button" className="btn btn-danger  kg-row">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
