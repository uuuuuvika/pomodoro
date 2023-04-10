import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../redux-store/store";
const beep = new Audio('../metalofhonor.wav')

const Timer: React.FC = () => {
  const { timerLabel, timeLeft } = useSelector(
    (state: RootState) => state.pomodoro
  );
  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;

  useEffect(() => {
    if (timeLeft === 0) {
      beep.play();
    }
  }, [timeLeft]);

  return (
    <div id="timer">
      <div id="timer-label">{timerLabel}</div>

      <div id="time-left">
        {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:
        {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
      </div>
    </div>
  );
};

export default Timer;
