// export default function Timer() {
//   return (
//     <div id="timer">
//       <h1 id="timer-label">session/break</h1>
//       <div id="time-left">mm:ss</div>
//     </div>
//   );
// }
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-store/store';

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const {
    sessionLength,
    breakLength,
    timerLabel,
    timeLeft,
    timerRunning,
  } = useSelector((state: RootState) => state.timer);

  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;

  const handleSessionIncrement = () => {
    if (!timerRunning) {
      dispatch({type: 'INCREMENT_SESSION'});
    }
  };

  const handleSessionDecrement = () => {
    if (!timerRunning) {
      dispatch({type: 'DECREMENT_SESSION'});
    }
  };

  const handleBreakIncrement = () => {
    if (!timerRunning) {
      dispatch({type: 'DECREMENT_BREAK'});
    }
  };

  const handleBreakDecrement = () => {
    if (!timerRunning) {
      dispatch({type: 'DECREMENT_BREAK'});
    }
  };

  const handleStartStop = () => {
    dispatch({type: 'START_STOP'});
  };

  const handleReset = () => {
    dispatch({type: 'RESET'});
  };

  return (
    <div>
      <div id="session-label">Session Length</div>
      <div>
        <button id="session-decrement" onClick={handleSessionDecrement}>
          -
        </button>
        <span id="session-length">{sessionLength}</span>
        <button id="session-increment" onClick={handleSessionIncrement}>
          +
        </button>
      </div>
      <div id="break-label">Break Length</div>
      <div>
        <button id="break-decrement" onClick={handleBreakDecrement}>
          -
        </button>
        <span id="break-length">{breakLength}</span>
        <button id="break-increment" onClick={handleBreakIncrement}>
          +
        </button>
      </div>
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">
        {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:
        {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
      </div>
      <button id="start_stop" onClick={handleStartStop}>
        {timerRunning ? 'Stop' : 'Start'}
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
