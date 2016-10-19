/**
 * Request.js from https://github.com/soliury/noder-react-native
 */
import queryString from 'query-string';
import config from '../config';



// ---------------------------------------------------------------------------
// These functions are the basic request functions used to interact with
// api's with fetch, urls need to be passed in accordingly.
// ---------------------------------------------------------------------------
let request = {};

function handleErrors(res) {
  if (res.ok) {
    return res;
  }
  return res.json()
  .then(function (err) {
    if (err.error) {
      throw new Error(err.error);
    } else if (err.hasOwnProperty('non_field_errors')) {
      throw new Error(err.non_field_errors[0]);
    } else {
      throw new Error('An unknown error occurred');
    }
  });
}

request.get = function (url, params) {
  let apiUrl = `${config.api_url}${url}`;
  if (params) {
    apiUrl = `${apiUrl}?${queryString.stringify(params)}`;
  }
  const fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };
  return fetch(apiUrl, fetchOptions)
    .then(handleErrors)
    .then(res=>res.json());
};

request.post = function (url, body, userToken = null) {
  let apiUrl = `${config.api_url}${url}`;
  let tokenString = '';
  let jwt = config.dev_api_key;
  if (jwt && userToken) {
    tokenString = `Token token=${jwt}:${userToken}`;
  } else if (jwt !== '') {
    tokenString = `Token token=${jwt}`;
  } else {
    tokenString = ``;
  }
  let fetchOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: tokenString,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
  return fetch(apiUrl, fetchOptions)
    .then(handleErrors)
    .then(res=>res.json());
};

request.upload = function (url, body, userToken = null, method = 'POST') {
  let apiUrl = `${config.api_url}${url}`;
  let jwt = config.dev_api_key;
  let tokenString = '';
  if (jwt && userToken) {
    tokenString = `Token token=${jwt}:${userToken}`;
  } else if (jwt !== '') {
    tokenString = `Token token=${jwt}`;
  } else {
    tokenString = ``;
  }
  let fetchOptions = {
    method: method,
    headers: {
      Authorization: jwt ? 'JWT ' + jwt : ''
    },
    body: body
  };
  return fetch(apiUrl, fetchOptions)
    .then(handleErrors)
    .then(res=>res.json());
};

request.patch = function (url, body, userToken = null) {
  let apiUrl = `${config.api_url}${url}`;
  let jwt = config.dev_api_key;
  let tokenString = '';
  if (jwt && userToken) {
    tokenString = `Token token=${jwt}:${userToken}`;
  } else if (jwt !== '') {
    tokenString = `Token token=${jwt}`;
  } else {
    tokenString = ``;
  }
  let fetchOptions = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      Authorization: tokenString,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
  return fetch(apiUrl, fetchOptions)
    .then(handleErrors)
    .then(res=>res.json());
};

//only will work with url encoded puts
request.put = function (url, body, userToken = null) {
  let apiUrl = `${config.api_url}${url}`;
  let jwt = config.dev_api_key;
  let tokenString = '';
  if (jwt && userToken) {
    tokenString = `Token token=${jwt}:${userToken}`;
  } else if (jwt !== '') {
    tokenString = `Token token=${jwt}`;
  } else {
    tokenString = ``;
  }
  let fetchOptions = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: tokenString,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body
  };
  return fetch(apiUrl, fetchOptions)
    .then(handleErrors)
    .then(res=>res.json());
};

request.protectedGet = function (url, userToken = null, params) {
  let apiUrl = `${config.api_url}${url}`;
  // let jwt = config.dev_api_key;
  // if (params) {
  //   apiUrl = `${apiUrl}${queryString.stringify(params)}`;
  // }
  // let tokenString = '';
  // if (jwt && userToken) {
  //   tokenString = `Token token=${jwt}:${userToken}`;
  // } else if (jwt !== '') {
  //   tokenString = `Token token=${jwt}`;
  // } else {
  //   tokenString = ``;
  // }
  let fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      // Authorization: tokenString
    }
  };
  return fetch(apiUrl, fetchOptions)
    .then(handleErrors)
    .then(res=>res.json());
};

request.delete = function (url, userToken = null) {
  let apiUrl = `${config.api_url}${url}`;
  let jwt = config.dev_api_key;
  let tokenString = '';
  if (jwt && userToken) {
    tokenString = `Token token=${jwt}:${userToken}`;
  } else if (jwt !== '') {
    tokenString = `Token token=${jwt}`;
  } else {
    tokenString = ``;
  }
  let fetchOptions = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: tokenString
    }
  };
  return fetch(apiUrl, fetchOptions)
    .then(handleErrors)
    .then();
};

module.exports = request;
