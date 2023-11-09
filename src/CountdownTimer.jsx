import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(5 * 60); // Set initial time to 5 minutes in seconds

  useEffect(() => {
    const countDownDate = new Date().getTime() + time * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTime(0);
      } else {
        const remainingTime = Math.max(Math.floor(distance / 1000), 0); // Ensure positive time
        setTime(remainingTime);
      }
    }, 500);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div >
      {formatTime(time)}
    </div>
  );
};

export default CountdownTimer;
