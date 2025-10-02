import TodoItem from './TodoItem';
import itemstyle from './TodoItems.module.css';
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={itemstyle.itemcontainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoname={item.name}
          tododate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
