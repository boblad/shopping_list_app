import Request from './Request';

let req = {};

req.listProduct = (username, password) => {
  let url = `/rest-auth/`;
  let body = {
    username: username,
    password: password
  }
  return Request.post(url, body)
  .then(data => data)
}

exports.req = req;
