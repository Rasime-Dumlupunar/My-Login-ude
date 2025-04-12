import { LOGIN_SUCCESS, LOGOUT } from "../actions/authActions";

const initialState = {
  authOperations: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authOperations: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        authOperations: false,
        user: null,
      };

    default:
      return state;
  }
};
export default authReducer;
