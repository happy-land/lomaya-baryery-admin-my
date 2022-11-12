import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import store from '../store';

// дописать юнион-тип
type TApplicationActions = {
  type: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
