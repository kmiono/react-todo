import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(["test", "サンプルTODO"]);
  const [show, setShow] = useState(false);

  const onClickRemove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const openModal = () => {
    setShow(true);
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
                onClick={() => onClickRemove(index)}
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
      <button className="addButton" onClick={openModal}>
        +
      </button>
      <Modal show={show} setShow={setShow} />
    </div>
  );
}

function Modal(props) {
  const { show, setShow } = props;
  if (show) {
    return (
      <div id="overlay">
        <div id="content">
          <h2>新規登録</h2>
          <input className="modal" type="text" placeholder="タスク名" />

          <button className="cancel" onClick={() => setShow(false)}>
            キャンセル
          </button>
          <button className="add">保存</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
