import React, { createContext, Dispatch, useReducer } from 'react';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const TodosStateContext = createContext<TodosState | undefined>(undefined);

type Action = { type: 'CREATE'; text: string } | { type: 'TOGGLE' } | { type: 'REMOVE' };

type TodosDispatch = Dispatch<Action>;

const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case 'CREATE':
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false
      });
    default:
      throw new Error('unhandled action');
  }
}

export function TodosContextProvider({ children }: { children: React.ReactNode }) {
  const [todos, dispatch] = useReducer(todosReducer, [
    { id: 0, text: '숨쉬기', done: true },
    { id: 1, text: '개발하기', done: false },
    { id: 2, text: '잠자기', done: false }
  ]);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>{children}</TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}
