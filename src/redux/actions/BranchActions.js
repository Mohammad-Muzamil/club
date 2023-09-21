// actions/Branch.js
export const GET_BRANCH = "GET_BRANCH";
export const SET_BRANCH = "SET_BRANCH";

export const getBranch = () => {
  return {
    type: GET_BRANCH,
  };
};

export const setBranch = (branch) => {
  return {
    type: SET_BRANCH,
    payload: branch,
  };
};