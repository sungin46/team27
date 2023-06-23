import { useState } from 'react';

const TodoItem = ({ id, text, handleDelete }) => {
  return (
    <li>
      <span id={id}>{text}</span>
      <button onClick={() => handleDelete(id)}>삭제</button>
    </li>
  );
};

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');
  const handleInput = (event) => {
    setText(event.target.value);
  };
  const handleEnter = (event) => {
    if (event.code === 'Enter') {
      setTodoList((prev) => [...prev, { id: Date.now(), text }]);
      setText('');
    }
  };
  const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input onChange={handleInput} onKeyDown={handleEnter} value={text} />
      <ul>
        {todoList.map((item, index) => (
          <TodoItem
            key={index}
            id={item.id}
            text={item.text}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
