/**
 * Objectives: - Recreate the Counter App using useContext structure: (U)
 *             - use useContext hook in components needed for Counter App
 *             - display count value, increment button and decrement button
 */

import { useContext } from 'react';
import { CounterContext } from './CounterContext';
import './Hook.css';

const Count = ({ action, message }) => {
  return (
    <div className="card">
      <button className="text" onClick={action}>
        {message}
      </button>
    </div>
  );
};

const HooksUseContext = () => {
  const { increment, decrement, reset, count } = useContext(CounterContext);

  return (
    <>
      <h1>Hooks: useRef </h1>
      <p className="text">{count}</p>
      <Count action={increment} message="Increment" />
      <br />
      <Count action={decrement} message="Decrement" />
      <br />
      <Count action={reset} message="Reset" />
    </>
  );
};

export default HooksUseContext;
