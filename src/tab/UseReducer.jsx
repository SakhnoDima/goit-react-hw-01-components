import { useReducer } from 'react';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'dicrement':
      return { ...state, count: state.count - action.payload };
    default:
      throw new Error(`Unsupportetd action type ${action.type}`);
  }
};
const init = initState => {
  return { ...initState, count: initState.count + 100 };
};

export const CounterReduce = () => {
  const [state, dispatch] = useReducer(
    countReducer,
    {
      count: 0,
    },
    init
  );

  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Increment
      </button>
      <p>{state.count}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: 'dicrement', payload: 1 })}
      >
        Decrement
      </button>
    </div>
  );
};
