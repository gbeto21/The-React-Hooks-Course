/**
 * Objectives: * Use useCallback hook to demonstrate how hook works
 *              - Optimizing expensive computation,
 *                --> use 'useCallback' to show function memoization
 */

import { useState, useCallback } from 'react';
import Button from '../components/Button.jsx';
import Typography from '../components/Typography/Typography.jsx';

const setFunc = new Set();

const HooksUseCallback1 = () => {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(0);

  const increment = () => {
    setInc(inc + 1);
  };

  const decrement = useCallback(() => {
    setDec(dec - 1);
  }, [dec]);

  console.log('HooksRendered');
  setFunc.add(increment);
  setFunc.add(decrement);
  console.log(setFunc);

  return (
    <>
      <Typography type="h1">useCallback</Typography>
      <br />
      <Typography type="p">Increment {inc}</Typography>
      <Typography type="p">Decrement {dec}</Typography>
      <br />
      <Button action={increment} message="INCREMENT" />
      <br />
      <Button action={decrement} message="DECREMENT" />
      <br />
    </>
  );
};

export default HooksUseCallback1;
