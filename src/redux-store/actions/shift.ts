import { baseUrl } from "../../utils/constants";
import { checkResponse, checkSuccess } from "../../utils/utils";
import { AppDispatch, AppThunk } from "../types";
import { TShift } from "../types/data";

export const GET_SHIFT_REQUEST: 'GET_SHIFT_REQUEST' = 'GET_SHIFT_REQUEST';
export const GET_SHIFT_SUCCESS: 'GET_SHIFT_SUCCESS' = 'GET_SHIFT_SUCCESS';
export const GET_SHIFT_ERROR: 'GET_SHIFT_ERROR' = 'GET_SHIFT_ERROR';

export const GET_SHIFTS_REQUEST: 'GET_SHIFTS_REQUEST' = 'GET_SHIFTS_REQUEST';
export const GET_SHIFTS_SUCCESS: 'GET_SHIFTS_SUCCESS' = 'GET_SHIFTS_SUCCESS';
export const GET_SHIFTS_ERROR: 'GET_SHIFTS_ERROR' = 'GET_SHIFTS_ERROR';

//GET_SHIFT
export interface IGetShiftAction {
  type: typeof GET_SHIFT_REQUEST;
}

export interface IGetShiftSuccessAction {
  type: typeof GET_SHIFT_SUCCESS;
  payload: TShift;
}

export interface IGetShiftFailAction {
  type: typeof GET_SHIFT_ERROR;
}

// GET_SHIFTS
export interface IGetShiftsAction {
  type: typeof GET_SHIFTS_REQUEST;
}

export interface IGetShiftsSuccessAction {
  type: typeof GET_SHIFTS_SUCCESS;
  payload: Array<TShift>;
}

export interface IGetShiftsFailAction {
  type: typeof GET_SHIFTS_ERROR;
}

export type TShiftActions = 
  | IGetShiftAction
  | IGetShiftSuccessAction
  | IGetShiftFailAction
  | IGetShiftsAction
  | IGetShiftsSuccessAction
  | IGetShiftsFailAction;

  // Используется для типизации ответа сервера
  // при получении списка всех смен
  type TShiftsData = {
    data: Array<TShift>;
  }

  // Получить список смен с фильтрацией по статусу.
  export const getShiftsThunk: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch({
      type: GET_SHIFTS_REQUEST,
    });

    return fetch(`${baseUrl}/shifts/`)
    // return fetch(`${baseUrl}/ingredients/`)
    .then((result) => checkResponse<TShiftsData>(result))
    .then(checkSuccess)
    .then((responseBody) => {
      if (responseBody) {
        console.log(responseBody);
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_SHIFTS_ERROR,
        payload: err,
        
      });
    })
  }