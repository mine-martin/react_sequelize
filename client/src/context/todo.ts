import React, { useState, createContext } from 'react';

export const TodoContext = createContext(undefined);

export const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState([]);

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
