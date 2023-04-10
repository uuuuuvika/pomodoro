import React, { useState } from "react";

const Break: React.FC = () => {
  const [breakLength, setBreakLength] = useState<number>(5);

  const handleDecrement = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };
  const handleIncrement = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };
  
  return (
    <div className="row-child w-36">
      <div id="break-label">break length</div>

      <div className="flex">
        <button
          id="break-increment"
          className="btn flex-initial"
          onClick={handleIncrement}
        >
          +
        </button>
        <div id="break-length" className="flex-1">
          {breakLength}
        </div>
        <button
          id="break-decrement"
          className="btn flex-initial"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Break;
