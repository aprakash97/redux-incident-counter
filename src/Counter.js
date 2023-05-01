import { useDispatch, useSelector } from 'react-redux';
import { increment, INCREMENT, DECREMENT, decrement, set } from './actions';

export const Counter = () => {
  const incident = 'Incident';
  
  let count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // const increment = () => {
  //   count++;
  //   console.log(count);
  // };
  // function handleChange(event) {
  //   console.log(event.target.value);
  // }
  // console.log('Testing');

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
    </main>
  );
};

export default Counter;
