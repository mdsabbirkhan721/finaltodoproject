function TodoItem({ todoname, tododate, onDeleteClick }) {
  return (
    <div className="container text-center">
      <div className="row mb-2">
        <div className="col-6 ">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoname)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
