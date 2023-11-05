/**
 * Objectives: - Use useEffect hook to simulate how the hook works
 *             - include dependencies
 *             - include clean up
 */
import { useState, useEffect } from 'react';
import './Hook.css';

const Count = ({ count, handleCount }) => {
  return (
    <div className="card">
      <button className="text" onClick={handleCount}>
        count is {count}
      </button>
    </div>
  );
};

const HooksUseEffect = () => {
  const [count, setCount] = useState(0);

  // TODO: Use useEffect hook to simulate how the hook works
  //       - include dependencies and clean up
  useEffect(() => {
    console.log('useEffect.');
    console.log(`Current count: ${count}`);

    return () => {
      console.log('Clean up effect.');
    };
  }, [count]);

  const handleCount = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <>
      <h1>Hooks: useEffect </h1>
      <Count count={count} handleCount={handleCount} message={`count is ${count}`} />
    </>
  );
};

export default HooksUseEffect;
