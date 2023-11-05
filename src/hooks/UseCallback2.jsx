/**
 * Objectives: * Use useCallback hook to demonstrate how hook works
 *              - Passing Callbacks to Child Components,
 *                --> use 'memo' and 'useCallback' to avoid child component rerender
 */

import { useState, useCallback, memo } from 'react';
import Typography from '../components/Typography/Typography.jsx';
import Button from '../components/Button.jsx';

// const Decrement = ({ dec }) => {
//   console.log('From Decrement');
//   return <Typography type="p">Decrement: {dec}</Typography>;
// };

// Using memo
// const Decrement = memo(function Decrement({ dec }) {
//   console.log('From Decrement');
//   return <Typography type="p">Decrement: {dec}</Typography>;
// });

// Using memo accpeting function props
const Decrement = memo(function Decrement({ dec }) {
  console.log('From Decrement');
  return <Typography type="p">{dec()}</Typography>;
});

const HooksUseCallback2 = () => {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(0);

  const increment = () => {
    setInc(inc + 1);
  };
  const decrement = useCallback(() => {
    setDec(dec - 1);
  }, [dec]);

  const decFunc = useCallback(() => `Decrement ${dec}`, [dec]);

  return (
    <>
      <Typography type="h1">useCallback</Typography>
      <br />
      <Typography type="p">Increment: {inc}</Typography>
      {/* <Typography type="p">Decrement: {dec}</Typography> */}
      <Decrement dec={decFunc} />
      <br />
      <Button action={increment} message="INCREMENT" />
      <br />
      <Button action={decrement} message="DECREMENT" />
      <br />
    </>
  );
};

export default HooksUseCallback2;
