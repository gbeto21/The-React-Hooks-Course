/**
 * Objectives: - Recreate the Counter App using useContext structure: (C.P.)
 *             - create context for counter (CounterContext)
 *             - include counter components
 *                * increment, decrement, reset
 *             - Provide Context (CounterProvider)
 *             - Export ContextCounter and ProviderCounter
 */

import { useState, createContext } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const value = {
    count,
    increment,
    decrement,
    reset
  };

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
};

export { CounterProvider, CounterContext };
