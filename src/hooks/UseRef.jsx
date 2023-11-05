/**
 * Objectives: - Use useRef hook to simulate how the hook works
 *             - preserve value over renders
 *             - access dom elements
 *             - forwardRef
 */
import { useState, useRef, useEffect, forwardRef } from 'react';
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

const Input = forwardRef((_, ref) => {
  return (
    <input ref={ref} type="number" name="input focus" placeholder="Input Focus" className="text" />
  );
});

const HooksUseRef = () => {
  const [count, setCount] = useState(0);
  const buttonLogger = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleButtonLoger = () => {
    buttonLogger.current++;
    console.log(buttonLogger.current);
  };

  return (
    <>
      <h1>Hooks: useRef </h1>
      <Count action={handleCount} message={`count is ${count}`} />
      <br />
      <Count action={handleButtonLoger} message={`button clicked: ${buttonLogger.current}`} />
      <br />
      <Input ref={inputRef} />
    </>
  );
};

export default HooksUseRef;
