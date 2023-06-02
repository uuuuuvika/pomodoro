import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-functionality/store";

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const { timerRunning, timeLeft } = useSelector(
    (state: RootState) => state.pomodoro
  );

useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (timeLeft >= 0) {
      intervalId = setInterval(() => {
        dispatch({ type: "TICK" });
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
    const beep = document.getElementById("beep") as HTMLAudioElement;
    beep.pause();
    beep.currentTime = 0;
    dispatch({ type: "RESET" });
  };

  return (
    <div className="space-x-4">
      <button
        id="start_stop"
        onClick={handleStartStop}
        className="btn btn-outline btn-accent"
      >
        {timerRunning ? "Stop" : "Start"}
      </button>
      <button
        id="reset"
        onClick={handleReset}
        className="btn  btn-outline btn-success"
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
