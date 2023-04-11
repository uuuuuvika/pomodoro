import { PomodoroAction } from "./actions";

type PomodoroState = {
  sessionLength: number;
  breakLength: number;
  timerLabel: 'Session' | 'Break';
  timeLeft: number;
  timerRunning: boolean;
  isReseted: boolean;
};

const initialState: PomodoroState = {
  sessionLength: 25,
  breakLength: 5,
  timerLabel: 'Session',
  timeLeft: 25 * 60,
  timerRunning: false,
  isReseted: false,
};

const PomodoroReducer = (state = initialState, action: PomodoroAction): PomodoroState => {
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
          state.timerLabel === 'Session' && state.sessionLength > 1 
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
      if(state.timerRunning === true) {
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
    }
    return {
      ...state,
    }
    case 'RESET':
      return {
        ...initialState,
        sessionLength: initialState.sessionLength,
        breakLength: initialState.breakLength,
        isReseted: true,
      };
    default:
      return state;
  }
};

export default PomodoroReducer;