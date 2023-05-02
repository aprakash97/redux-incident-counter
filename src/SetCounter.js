import { useState } from 'react';
import { set } from './actions';
import { useDispatch, useSelector } from 'react-redux';

export const SetCounter = () => {
  const initialNumber = useSelector((state) => state.count);
  const [number, setNumber] = useState(initialNumber);
  const dispatch = useDispatch();

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(number));
          console.log(number);
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
