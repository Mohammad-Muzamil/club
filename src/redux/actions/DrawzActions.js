export const GET_DRAWZ= "GET_DRAWZ";
export const SET_DRAWZ = "SET_DRAWZ";

export const getDrawz = () => {
  return {
    type: GET_DRAWZ,
  };
};

export const setDrawz = (competition) => {
  return {
    type: SET_DRAWZ,
    payload: competition,
  };
};