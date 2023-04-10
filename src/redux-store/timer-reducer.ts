import { TimerAction } from "./actions";

type TimerState = {
  sessionLength: number;
  breakLength: number;
  timerLabel: 'Session' | 'Break';
  timeLeft: number;
  timerRunning: boolean;
};

const initialState: TimerState = {
  sessionLength: 25,
  breakLength: 5,
  timerLabel: 'Session',
  timeLeft: 25 * 60,
  timerRunning: false,
};

const timerReducer = (state = initialState, action: TimerAction): TimerState => {
  switch (action.type) {
    case 'INCREMENT_SESSION':
      return {
        ...state,
        sessionLength: state.sessionLength < 60 ? state.sessionLength + 1 : state.sessionLength,
        timeLeft:
          state.timerLabel === 'Session'
            ? (state.sessionLength + 1) * 60
            : state.timeLeft,
      };
    case 'DECREMENT_SESSION':
      return {
        ...state,
        sessionLength: state.sessionLength > 1 ? state.sessionLength - 1 : state.sessionLength,
        timeLeft:
          state.timerLabel === 'Session'
            ? (state.sessionLength - 1) * 60
            : state.timeLeft,
      };
    case 'INCREMENT_BREAK':
      return {
        ...state,
        breakLength: state.breakLength < 60 ? state.breakLength + 1 : state.breakLength,
        timeLeft:
          state.timerLabel === 'Break'
            ? (state.breakLength + 1) * 60
            : state.timeLeft,
      };
    case 'DECREMENT_BREAK':
      return {
        ...state,
        breakLength: state.breakLength > 1 ? state.breakLength - 1 : state.breakLength,
        timeLeft:
          state.timerLabel === 'Break'
            ? (state.breakLength - 1) * 60
            : state.timeLeft,
      };
    case 'START_STOP':
      return {
        ...state,
        timerRunning: !state.timerRunning,
      };
    case 'TICK':
      return {
        ...state,
        timeLeft: state.timeLeft > 0 ? state.timeLeft - 1 : 0,
        timerLabel:
          state.timeLeft === 0
            ? state.timerLabel === 'Session'
              ? 'Break'
              : 'Session'
            : state.timerLabel,
      };
    case 'RESET':
      return {
        ...initialState,
        sessionLength: state.sessionLength,
        breakLength: state.breakLength,
      };
    default:
      return state;
  }
};

export default timerReducer;