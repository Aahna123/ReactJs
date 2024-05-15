function ToDoItem1() {
  let toDoName = "Buy Milk";
  let toDoDate = "3/10/23";
  return (
    <div class="container">
      <div class="row">
        <div class="col-6">{toDoName}</div>
        <div class="col-4">{toDoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem1;
