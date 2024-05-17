function AddToDo() {
  return (
    <div class="container">
      <div className="row kg-row">
        <div class="col-6">
          <input className="input" type="text" placeholder="enter" />
        </div>
        <div class="col-4">
          <input className="input" type="date" />
        </div>
        <div class="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
