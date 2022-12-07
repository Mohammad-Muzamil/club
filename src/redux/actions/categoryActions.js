export const SET_CATEGORY = "SET_CATEGORY";


//add to category
export const setCatgories = (item) => {
  return (dispatch) => {
    dispatch({
      type: SET_CATEGORY,
      payload: item,
    });
  };
};


