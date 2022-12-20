import { MouseEventHandler, useReducer } from "react";

type CounterState = {
  count: number;
}

type ActionType = 'increase' | 'decrease';

type Action = {
  type: ActionType,
}

const INITIAL_STATE: CounterState = {
  count: 0,
}

const reducer = (state: CounterState, action: Action) => {
  switch (action.type) {
    case 'increase':
      return { count: state.count + 1 };
    case 'decrease':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const Clicker = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: 'increase' });
  }

  return (
    <div>
      <p>Value: {state.count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}