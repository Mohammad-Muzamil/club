export const SET_USER = 'SET_USER';
export const ALTER_USER = 'ALTER_USER';
export const ALTER_JUST_USER = 'ALTER_JUST_USER';
export const SET_TOKEN = 'SET_TOKEN';

function setUser(userData,addToast) {

    if (addToast) {
        addToast("User Sucessfully Login", {
          appearance: "success",
          autoDismiss: true
        });
      }
    return dispatch => {
      dispatch({type: SET_USER, payload: userData});
    };
  }
  function setToken(token) {
    return dispatch => {
      dispatch({type: SET_TOKEN, payload: token});
    };
  }
  
  function alterUser(user) {

    return dispatch => {
      dispatch({type: ALTER_USER, payload: user});
    };
  }
  function alterJustUser(user) {
    return dispatch => {
      dispatch({type: ALTER_JUST_USER, payload: user});
    };
  }
  
  export {setUser, alterUser, alterJustUser, setToken};