import { useState } from 'react';
import './styles.css';
import Modal from 'react-modal';

export default function App() {
  const [todos, setTodos] = useState(['test', 'サンプルTODO']);
  const [todoText, setTodoText] = useState('');
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const onClickRemove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // 値取得
  const onChnageTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
    setTodoText('');
    closeModal();
  };

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };
  const closeModal = () => {
    setEditModalIsOpen(false);
  };
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>TODO List</h1>
        </div>
      </header>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo}>
              <input
                className="check"
                type="checkbox"
                onClick={() => onClickRemove(index)}
              />
              <label>{todo}</label>
              <button
                className="removeBtn"
                onClick={() => onClickRemove(index)}>
                X
              </button>
            </div>
          );
        })}
      </ul>
      <button className="addButton" onClick={openEditModal}>
        +
      </button>
      <Modal isOpen={editModalIsOpen}>
        <h2>新規登録</h2>
        <input
          className="modal"
          type="text"
          placeholder="タスク名"
          value={todoText}
          onChange={onChnageTodoText}
        />
        <br />
        <button className="cancel" onClick={closeModal}>
          キャンセル
        </button>
        <button className="add" onClick={onClickAdd}>
          保存
        </button>
      </Modal>
    </div>
  );
}
