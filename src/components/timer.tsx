import { useSelector } from 'react-redux';
import { RootState } from '../redux-store/store';

const Timer: React.FC = () => {
  const {
    timerLabel,
    timeLeft,
  } = useSelector((state: RootState) => state.pomodoro);

  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;

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
