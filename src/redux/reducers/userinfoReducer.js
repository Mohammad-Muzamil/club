import {
  SET_USER,
  ALTER_USER,
  ALTER_JUST_USER,
  SET_TOKEN,
} from "../actions/userinforActions";

const initState = {
  userDetail: "",
  userToken: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      state = Object.assign({}, state, {
        userDetail: action.payload.user,
        userToken: action.payload.access_token,
      });
      console.log("Action Paaayloooad of User and Token", action.payload);
      return state;

    case ALTER_USER:
      state = Object.assign({}, state, {
        userDetail: action.payload.user,
        userToken: action.payload.access_token,
        role: action.payload.role,
        loading: false,
      });
      console.log(action.payload);
      return state;

    case ALTER_JUST_USER:
      state = Object.assign({}, state, { userDetail: action.payload.user });
      return state;

    case SET_TOKEN:
      state = Object.assign({}, state, { userToken: action.payload.user });
      // AsyncStorage.setItem(TOKEN, JSON.stringify(action.payload));
      return state;

    default:
      return state;
  }
};
export default userReducer;
