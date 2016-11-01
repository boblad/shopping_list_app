import Request from './Request';

let req = {};

req.loginUser = (email, password) => {
  let url = `/auth/login/`;
  let body = {
    email: 'bryantoblad1@gmail.com',
    password: 'poncacity'
  }
  return Request.post(url, body)
  .then(data => data)
}

exports.req = req;
