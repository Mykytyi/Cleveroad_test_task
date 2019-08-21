import { initialState } from './initialState';

export function todo(state = initialState, action) {
  switch (action.type) {
    case 'ChangeData':
      return {
        ...state,
        longitude: action.longitude,
        latitude: action.latitude
      };
    default:
      return state;
  }
}