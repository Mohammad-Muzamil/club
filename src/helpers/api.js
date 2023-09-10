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




export async function Populer_Picks() {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/products/popular_products`,
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

export async function AllBrands() {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/products/brand/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',     
    },
  };

  const GetResponse = await  axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function Brand_Products(brand_id) {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/products/brand_products/${brand_id}/`,
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


export async function Product_Variants(product_id) {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/products/product_variants/${product_id}/`,
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


export async function Single_Product_Variants(product_id) {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/products/product_variant/${product_id}/`,
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

export  async function verify_voucher_code(uuid) {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/users/voucher/code/${uuid}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await  axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;

}
export  async function get_size() {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/products/option/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await  axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export  async function get_varaiant_images(uuid) {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/products/images/${uuid}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await  axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export  async function get_countries_list() {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/users/shipping_price/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await  axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}


export  async function get_testinomials() {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/users/testimonial/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await  axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export  async function submit_order(data) {
  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_LOCAL_API}/order/testimonial/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await  axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

