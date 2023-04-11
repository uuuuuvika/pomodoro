import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../redux-store/store";
const beep = require("../metalofhonor.wav")

const Timer: React.FC = () => {
  const { timerLabel, timeLeft, isReseted } = useSelector(
    (state: RootState) => state.pomodoro
  );
  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;

  useEffect(() => {
    if (timeLeft === 57 && isReseted === false) {
      const beep = document.getElementById('beep') as HTMLAudioElement;
      beep.play();
    }
  }, [timeLeft]);

  return (
    <div id="timer">
      <div id="timer-label">{timerLabel}</div>
      <audio id="beep" src={beep}></audio>
      <div id="time-left">
        {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:
        {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
      </div>
    </div>
  );
};

export default Timer;
