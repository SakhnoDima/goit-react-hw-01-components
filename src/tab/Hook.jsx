import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Hook = () => {
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [time, setTime] = useState(0);
  // const firstRender = useRef(true);
  let n = useRef(0);
  useEffect(() => {
    // if (!firstRender.current) {
    //   setInterval(() => {
    //     console.log(n.current);
    //     n.current += 1;
    //   }, 1000);
    // }
    // firstRender.current = false;
    setTime(`You clicked ${value} times`);
  }, [value, n]);
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
