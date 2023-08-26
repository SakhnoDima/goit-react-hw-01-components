import { useState, useEffect, useRef } from 'react';

const Hook = () => {
  const [time, setTime] = useState(new Date(() => new Date()));
  const intervalId = useRef(null);
  const intervalId2 = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    intervalId2.current = setInterval(() => {
      console.log(1);
    }, 1000);
    return () => {
      console.log('Выполнится при размонтировании');
      clearInterval(intervalId2.current);
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <h1>Time now {time.toLocaleTimeString()}</h1>
      <button type="button" onClick={stop}>
        Stop Time
      </button>
    </div>
  );
};

export default Hook;
