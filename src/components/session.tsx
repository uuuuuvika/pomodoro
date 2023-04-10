import React, { useState } from "react";

const Session: React.FC = () => {
  const [sessionLength, setSessionLength] = useState<number>(5);

  const handleDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };
  const handleIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  };
  
  return (
    <div className="row-child w-36">
      <div id="session-label">session length</div>

      <div className="flex">
        <button
          id="session-increment"
          className="btn flex-initial"
          onClick={handleIncrement}
        >
          +
        </button>
        <div id="session-length" className="flex-1">
          {sessionLength}
        </div>
        <button
          id="session-decrement"
          className="btn flex-initial"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Session;
