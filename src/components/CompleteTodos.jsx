import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickUndo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todos.map((completeTodo, index) => {
          return (
            <>
              <div key={completeTodo} className="list-row">
                <li>{completeTodo}</li>
                <button onClick={() => onClickUndo(index)}>戻す</button>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};
