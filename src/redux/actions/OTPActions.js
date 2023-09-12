// actions/OTPActions.js
export const GET_OTP_DATA = "GET_OTP_DATA";
export const SET_OTP_DATA = "SET_OTP_DATA";

export const getOTPDATA = () => {
  return {
    type: GET_OTP_DATA,
  };
};

export const setOTPDATA = (otp_data) => {
  return {
    type: SET_OTP_DATA,
    payload: otp_data,
  };
};