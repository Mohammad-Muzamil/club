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
    // url: `//${window.location.host}/products/cover_products`,
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
    // url: `//${window.location.host}/products/cover_products`,
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

