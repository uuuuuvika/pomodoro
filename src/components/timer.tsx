import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../redux-store/store";
const beep = require("../metalofhonor.wav")

const Timer: React.FC = () => {
  const { timerLabel, timeLeft, isReseted } = useSelector(
    (state: RootState) => state.pomodoro
  );
  const dispatch = useDispatch();
  console.log(timeLeft)
  console.log(timerLabel)
  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;
 
  useEffect(() => {
    if (timeLeft === 0) {
      const beep = document.getElementById('beep') as HTMLAudioElement;
      beep.play();
      // dispatch({ type: "NEXT_ROUND" });
    }
  }, [timeLeft]);

  useEffect(() => {
    if (isReseted) {
      const beep = document.getElementById('beep') as HTMLAudioElement;
      beep.pause();
      beep.currentTime = 0;
    }
  }, [isReseted])


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
