import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  pages: {
    home: true,
    contact: false,
    about: false,
  },
};
const authStart = (state: any, action: any) => {
  return updateObject(state, { error: null, loading: true });
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    default:
      return state;
  }
};

export default reducer;
