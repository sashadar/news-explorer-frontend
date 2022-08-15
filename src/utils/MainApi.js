const BASE_URL = 'https://www.api.alexdar.news.students.nomoredomainssbs.ru';

const processResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`${res.status} ${res.statusText}`);
};

class MainApi {
  register = ({ email, password, name }) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        email: email,
        name: name,
      }),
    }).then((res) => {
      return res.json();
    });
  };

  authorize = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(processResponse)
      .then((data) => {
        localStorage.setItem('token', data.token);
        return data;
      });
  };

  checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(processResponse);
  };
}

const mainApi = new MainApi();

export default mainApi;
