import { INCREMENT, DECREMENT, SET } from './actions';

export const initialState = { count: 0 };

export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { count: ++state.count };
  }

  if (action.type === DECREMENT) {
    return { count: --state.count };
  }

  if (action.type === SET) {
    return { count: action.payload };
    // return { count: 500 };  //WORKS in reducx dev tools
  }
  return state;
};
