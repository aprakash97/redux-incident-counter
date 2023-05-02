import { useDispatch, useSelector } from 'react-redux';
import { SetCounter } from './SetCounter';
import { increment, INCREMENT, DECREMENT, decrement, set } from './actions';

export const Counter = () => {
  const incident = 'Incident';

  let count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => dispatch(increment(INCREMENT))}>
          Increment
        </button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button onClick={() => dispatch(decrement(DECREMENT))}>
          Decrement
        </button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
