import { useEffect, useState } from 'react';

function Question({ onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>Time Remaining: {timeRemaining}</h2>
      <p>What is the capital of France?</p>
      <button onClick={() => onAnswered(true)}>Paris</button>
      <button onClick={() => onAnswered(false)}>Berlin</button>
    </div>
  );
}

export default Question;
