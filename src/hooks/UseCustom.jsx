/**
 * Objectives: - Recreate the Counter App using useCustomHook
 */

import Typography from '../components/Typography/Typography.jsx';
import Button from '../components/Button.jsx';
import useCustomHook from './useCustomHook.js';

const HooksUseCustom = () => {
  const { count, increment, decrement, reset } = useCustomHook(2, 3);

  return (
    <>
      <Typography type="h1">Hooks: useCustom </Typography>
      <Typography type="p">{count}</Typography>
      <Button action={increment} message="Increment" />
      <br />
      <Button action={decrement} message="Decrement" />
      <br />
      <Button action={reset} message="Reset" />
      <br />
    </>
  );
};

export default HooksUseCustom;
