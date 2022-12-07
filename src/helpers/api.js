import axios from 'axios';

export async function LoginApi(data) {
  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_LOCAL_API}/auth/login/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}


export async function SignUpApi(data) {
  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_LOCAL_API}/auth/signup/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function ConfirmCodeOTPApi(data) {
  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_LOCAL_API}/auth/confirm_code/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function ResemdOTPApi(data) {
  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_LOCAL_API}/auth/resend_code/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function ForgotPasswordApi(data) {
  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_LOCAL_API}/auth/password/forget_request`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function ConfirmPasswordApi(data) {
  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_LOCAL_API}/auth/password/confirm_reset`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function GetAllCategoriesApi(data) {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/categories/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}




