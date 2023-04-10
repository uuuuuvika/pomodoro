import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-store/store";

export default function Controls() {
  const dispatch = useDispatch();
  const { timerRunning, timeLeft } = useSelector((state: RootState) => state.pomodoro);

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
      if (timeLeft > 0) {
        intervalId = setInterval(() => {
         dispatch({type:'TICK'});
        }, 1000);
      }
      return () => {
        if (intervalId !== null) {
          clearInterval(intervalId);
        }
      };
 
  }, [dispatch, timeLeft]);

  const handleStartStop = () => {
    dispatch({ type: "START_STOP" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <button id="start_stop" onClick={handleStartStop}>
        {timerRunning ? "Stop" : "Start"}
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
