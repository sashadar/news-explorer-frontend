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
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        email: email,
        name: name,
      }),
    }).then((res) => res.json());
  };

  authorize = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('token', data.token);
        return data;
      });
  };

  checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(processResponse);
  };

  getArticles = (token) => {
    return fetch(`${BASE_URL}/articles`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(processResponse)
      .then((res) => {
        return res.data.map((article) => {
          return {
            keyword: article.keyword,
            title: article.title,
            description: article.text,
            source: { name: article.source },
            publishedAt: article.date,
            url: article.link,
            urlToImage: article.image,
            _id: article._id,
          };
        });
      });
  };

  saveArticle = ({ token, article }) => {
    return fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword: article.keyword,
        title: article.title,
        text: article.description,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage,
      }),
    })
      .then(processResponse)
      .then((res) => {
        return {
          keyword: res.data.keyword,
          title: res.data.title,
          description: res.data.text,
          source: { name: res.data.source },
          publishedAt: res.data.date,
          url: res.data.link,
          urlToImage: res.data.image,
          _id: res.data._id,
        };
      });
  };

  deleteArticle = ({ token, articleId }) => {
    return fetch(`${BASE_URL}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(processResponse);
  };
}

const mainApi = new MainApi();

export default mainApi;
