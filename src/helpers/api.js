import axios from 'axios';

export async function ALL_USERS_API() {
  var config = {
    method: 'get',
    url: `http://127.0.0.1:8000/api/login`,
    // url: `//${window.location.host}/api/login`,
    
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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


export async function Login_API(username, password) {
  let dataofuser = {
    username: username,
    password: password,
  };
  var config = {
    method: 'post',
    url: `http://127.0.0.1:8000/api/login`,
    // url: `//${window.location.host}/api/login`,
    data:dataofuser,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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

export async function Cover_Products() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/products/cover_products/`,
    url: `//${window.location.host}/products/cover_products`,
    
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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


export async function USER_API_SELECTION(user_id) {
  var config = {
    method: 'get',
    url: `http://127.0.0.1:8000/api/user/${user_id}`,
    // url: `//${window.location.host}/api/user/${user_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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

export async function Forget_Password_OTP(user_name,email) {
  const dataofuser={
    username:user_name,
    email:email
  }
  var config = {
    method: 'post',
    url: `http://127.0.0.1:8000/api/forgetpasswordotp`,
    // url: `//${window.location.host}/api/forgetpasswordotp`,
    data:dataofuser,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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

export async function Reset_Password(user_name,email,password) {
  const dataofuser={
    username:user_name,
    email:email,
    password
  }
  var config = {
    method: 'put',
    url: `http://127.0.0.1:8000/api/resetpassword`,
    // url: `//${window.location.host}/api/resetpassword`,
    data:dataofuser,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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

export async function GET_BRANCHES() {
  var config = {
    method: 'get',
    url: `http://127.0.0.1:8000/api/branch`,
    // url: `//${window.location.host}/api/branch`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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

export async function GENERIC_OTP(email) {
  const data={
    email:email
  }
  var config = {
    method: 'post',
    url: `http://127.0.0.1:8000/api/otp`,
    // url: `//${window.location.host}/api/otp`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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

export async function SEND_PLAYER_DATA(formdata) {

  var config = {
    method: 'post',
    url: `http://127.0.0.1:8000/api/player`,
    // url: `//${window.location.host}/api/player,
    data:formdata,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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

// make endpoint on django
export async function UP(d) {
  let url= `http://127.0.0.1:8000/api/player`;
  const GetResponse = await axios.post(url, d, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }).then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error.response;
  });
  return GetResponse;
}

// make endpoint on django
export async function UPCOMMING_EVENTS() {
  var config = {
    method: 'get',
    url: `http://127.0.0.1:8000/api/upcomming_events`,
    // url: `//${window.location.host}/api/upcomming_events`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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

