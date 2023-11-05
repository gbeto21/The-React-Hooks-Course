/**
 * Objectives: * Use useMemo hook to simulate memoization
 *               - change iteration count from 100 to 1000000000
 *               - memoize expensiveIteration function
 *
 */

import React, { useState, useMemo } from 'react';
import Button from '../components/Button.jsx';
import Typography from '../components/Typography/Typography.jsx';

const HooksUseMemo = () => {
  const [inc, setInc] = useState(0);
  const [nth, setNth] = useState(0);

  //Original function, un-memoized
  // const expensiveIteration = () => {
  //   console.log('Performing expensive computation...');

  //   const start = performance.now();

  //   // Simulating an expensive calculation
  //   let result = 0;
  //   for (let i = 0; i < nth * 100; i++) {
  //     result += i;
  //   }

  //   const end = performance.now();
  //   console.log(`Execution time: ${end - start} ms`);

  //   return result;
  // };

  // Memoized computation
  const expensiveIteration = useMemo(() => {
    console.log('Performing expensive computation...');

    const start = performance.now();

    // Simulating an expensive calculation
    let result = 0;
    for (let i = 0; i < nth * 100; i++) {
      result += i;
    }

    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);

    return result;
  }, [nth]);

  return (
    <div>
      <Typography type="h1">useMemo</Typography>

      <Button action={() => setInc(inc + 1)} message={`Increment: ${inc}`} />
      <br />
      <hr />
      <br />
      <Button action={() => setNth(nth + 1)} message={`Expensive Iteration: ${nth} `} />
      <Typography type="p"> Value: {expensiveIteration}</Typography>
    </div>
  );
};

export default HooksUseMemo;
