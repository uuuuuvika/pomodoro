import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-store/store';

const Break: React.FC = () => {
  const dispatch = useDispatch();
  const {
    breakLength,
    timerRunning,
  } = useSelector((state: RootState) => state.pomodoro);

  const handleBreakIncrement = () => {
    if (!timerRunning) {
      dispatch({type: 'INCREMENT_BREAK'});
    }
  };
  const handleBreakDecrement = () => {
    if (!timerRunning) {
      dispatch({type: 'DECREMENT_BREAK'});
    }
  };

  return (
    <div className="row-child w-36">
      <div id="break-label">break length</div>

      <div className="flex">
        <button
          id="break-increment"
          className="btn flex-initial  btn-outline btn-accent"
          onClick={handleBreakIncrement}
        >
          +
        </button>
        <div id="break-length" className="flex-1">
          {breakLength}
        </div>
        <button
          id="break-decrement"
          className="btn flex-initial   btn-outline btn-accent"
          onClick={handleBreakDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Break;
