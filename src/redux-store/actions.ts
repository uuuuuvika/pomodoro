type IncrementSessionAction = { type: 'INCREMENT_SESSION' };
type DecrementSessionAction = { type: 'DECREMENT_SESSION' };
type IncrementBreakAction = { type: 'INCREMENT_BREAK' };
type DecrementBreakAction = { type: 'DECREMENT_BREAK' };
type StartStopAction = { type: 'START_STOP' };
type TickAction = { type: 'TICK' };
type ResetAction = { type: 'RESET' };

export type PomodoroAction =
  | IncrementSessionAction
  | DecrementSessionAction
  | IncrementBreakAction
  | DecrementBreakAction
  | StartStopAction
  | TickAction
  | ResetAction;
