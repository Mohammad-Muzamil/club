import axios from 'axios';

export async function Cover_Products() {
  var config = {
    method: 'GET',
    url: `${process.env.REACT_APP_LOCAL_API}/products/cover_products`,
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
    url: `${process.env.REACT_APP_LOCAL_API}/products/product/product_variants/${product_id}/`,
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


