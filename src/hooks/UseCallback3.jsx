/**
 * Objectives: * Use useCallback hook to demonstrate how hook works
 *              - Prevent Unnecessary Effects:
 *                --> use 'useEffect' and 'useCallback' to avoid unnecessary rerender
 */

import { useEffect, useCallback, useState } from 'react';
import Typography from '../components/Typography/Typography.jsx';
import Button from '../components/Button.jsx';

const Rando = ({ genRando }) => {
  const [finalRandomVal, setFinalRandomVal] = useState();
  // const expensiveCalc = () => genRando ** Math.random();
  const expensiveCalc = useCallback(() => genRando ** Math.random(), [genRando]);

  useEffect(() => {
    setFinalRandomVal(expensiveCalc());
  }, [expensiveCalc]);

  return <Typography type="p">Final Randome Number Generated Is: {finalRandomVal}</Typography>;
};

const HooksUseCallback3 = () => {
  const [genRando, setGenRando] = useState(() => Math.random());
  const handleRandom = () => {
    setGenRando(Math.random());
  };

  return (
    <>
      <Typography type="h1">useCallback</Typography>
      <br />
      <Button action={handleRandom} message="Generate Random Number" />
      <br />
      <Rando genRando={genRando} />
    </>
  );
};

export default HooksUseCallback3;
