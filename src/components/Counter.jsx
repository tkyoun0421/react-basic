import { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
    onClick();
  };

  return (
    <div className="counter">
      <span className="number">
        {counter} <span className="total">/ {total}</span>
      </span>
      <button className="button" onClick={handleClick}>
        Add +
      </button>
    </div>
  );
}
