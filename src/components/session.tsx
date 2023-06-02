import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-functionality/store';

const Session: React.FC = () => {
  const dispatch = useDispatch();
  const {
    sessionLength,
    timerRunning,
  } = useSelector((state: RootState) => state.pomodoro);

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
  
  return (
    <div className="row-child w-36">

      <div id="session-label">session length</div>

      <div className="flex">
        <button
          id="session-increment"
          className="btn flex-initial btn-accent mask mask-circle"
          onClick={handleSessionIncrement}
        >
          +
        </button>

        <div id="session-length" className="flex-1">
          {sessionLength}
        </div>

        <button
          id="session-decrement"
          className="btn flex-initial btn-success mask mask-circle"
          onClick={handleSessionDecrement}
        >
          -
        </button>
      </div>
      
    </div>
  );
};

export default Session;
