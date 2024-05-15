function ToDoItem2() {
  let toDoName = "Go To College";
  let toDoDate = "4/10/23";
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
export default ToDoItem2;
