import { actionTypes } from './actionTypes';

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return action.data;
    case actionTypes.LOGOUT:
      return undefined;
    default:
      return state;
  }
}
