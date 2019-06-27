import { actionTypes } from './actionTypes';
import { AuthLocalStorage } from '../../../helpers/auth/localStorage';

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      AuthLocalStorage.token = action.data.token;

      return action.data.user;
    case actionTypes.LOGOUT:
      AuthLocalStorage.remove();

      return undefined;
    default:
      return state;
  }
}
