import { Actions, Types } from './actions';
import { AppState } from './state';

const reducer = (state: AppState, { type, payload }: Actions) => {
  switch (type) {
    case Types.SET_ID:
      return {
        ...state,
        id: payload.id,
      };
    default:
      return state;
  }
};

export default reducer;
