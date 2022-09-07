import { useState } from 'react';
import PropTypes from 'prop-types';

// use = Hook
export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    // console.log(value);
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };
  const handleSubstract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubstract}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
