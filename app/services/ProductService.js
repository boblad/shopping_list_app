import Request from './Request';

let req = {};

req.listProduct = (userToken) => {
  let url = `/products/`;
  return Request.protectedGet(url, userToken)
  .then(data => data)
}

req.createProduct = (userToken, product) => {
  let url = `/products/`;
  return Request.protectedGet(url, userToken)
  .then(data => data)
}

req.retrieveProduct = (userToken, id) => {
  let url = `/products/${id}/`;
  return Request.protectedGet(url, userToken)
  .then(data => data)
}

exports.req = req;
