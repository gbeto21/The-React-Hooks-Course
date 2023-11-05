/**
 * Objectives: - Use useReducer hook to simulate Counter Application
 *             - create reducer function, include:
 *               - Increment, Decrement, Reset
 *             - dispatch actions
 *
 */

//Reducer Function
import { useReducer } from 'react';
import '../MainStyle.css';
import Button from '../components/Button';

//Reducer function
const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const HooksUseReducer = () => {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <>
      <h1>Hooks: useReducer </h1>
      <p className="text">{count}</p>
      <Button action={() => dispatch({ type: 'INCREMENT' })} message="INCREMENT" />
      <br />
      <Button action={() => dispatch({ type: 'DECREMENT' })} message="DECREMENT" />
      <br />
      <Button action={() => dispatch({ type: 'RESET' })} message="RESET" />
      <br />
    </>
  );
};

export default HooksUseReducer;
