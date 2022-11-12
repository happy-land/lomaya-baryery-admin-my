import { GET_SHIFT_ERROR, GET_SHIFT_REQUEST, GET_SHIFT_SUCCESS } from '../actions/shift';
import { TShift } from '../types/data';

type TShiftState = {
  shifts: Array<TShift>;
  isLoading: boolean;
  hasError: boolean;
};

const shiftInitialState: TShiftState = {
  shifts: [],
  isLoading: false,
  hasError: false,
};

export const shiftReducer = (state = shiftInitialState, action: any) => {
  switch (action.type) {
    case GET_SHIFT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_SHIFT_SUCCESS: {
      return {
        ...state,
      };
    }
    case GET_SHIFT_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }

    default: {
      return state;
    }
  }
};
