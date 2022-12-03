import todoModel from "./todoModel";
import TodoItem from "./TodoItem";

const Todos: React.FC<{
  items: todoModel[];
  removeTodo: (id: string) => void;
  complete: boolean;
  time: string;
}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completeTodo={item.complete}
          time={item.time}
          removeTodo={props.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
