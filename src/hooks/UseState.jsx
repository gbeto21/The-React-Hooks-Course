import { useState } from 'react';
import './Hook.css';

const HookUseState = () => {
  const [count, setCount] = useState(0);
  let localVariable = 0;

  const handCount = () => {
    console.log('before: ' + localVariable);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    localVariable = count;
    console.log('after: ' + localVariable + '\n\n');
  };

  return (
    <>
      <h1>Hooks: useState</h1>
      <div className="card">
        <button className="text" onClick={handCount}>
          Count is {count}
        </button>
      </div>
    </>
  );
};

export default HookUseState;
