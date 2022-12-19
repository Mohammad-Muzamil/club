import axios from 'axios';

export async function Cover_Products() {
  var config = {
    method: 'GET',
    url: `${process.env.REACT_APP_LOCAL_API}/product/cover_products`,
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
    url: `${process.env.REACT_APP_LOCAL_API}/product/popular_picks`,
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
    url: `${process.env.REACT_APP_LOCAL_API}/product/brands`,
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

export async function Brand_Products(brand_id) {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_LOCAL_API}/product/${brand_id}/products`,
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


