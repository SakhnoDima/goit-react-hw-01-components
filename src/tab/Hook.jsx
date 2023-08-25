import React from 'react';
import { useState, useEffect } from 'react';

const Hook = () => {
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log(1);
    setTime(`You clicked ${value} times`);
  }, [value]);
  return (
    <div>
      <button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
        Show
      </button>
      <br />
      {isModalOpen && (
        <>
          <button
            type="button"
            onClick={() => setValue(prevState => prevState + 1)}
          >
            + 1
          </button>
          <h2> {value}</h2>
          <p>{time}</p>
          <button
            type="button"
            onClick={() => setValue(prevState => prevState - 1)}
          >
            - 1
          </button>
        </>
      )}
    </div>
  );
};

export default Hook;
