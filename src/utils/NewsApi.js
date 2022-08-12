import Moment from 'moment';

const API_KEY = 'b00efeca77234815a240f08ba848173f';
const BASE_URI = 'https://nomoreparties.co/news/v2/everything?';
const BASE_URI_DEV = 'https://newsapi.org/v2/everything?';

class NewsApi {
  constructor(baseUri, apiKey) {
    this._baseUri = baseUri;
    this._apiKey = apiKey;
  }

  _getCurrentDate() {
    return Moment().format('YYYY-MM-DD');
  }

  _getPastDate() {
    return Moment().subtract(7, 'days').format('YYYY-MM-DD');
  }

  _generateUri(keyword) {
    return `${
      this._baseUri
    }q=${keyword}&from=${this._getPastDate()}&to=${this._getCurrentDate()}&pageSize=100&sortBy=popularity&apiKey=${
      this._apiKey
    }`;
  }

  getArticles(keyword) {
    return fetch(this._generateUri(keyword), {
      method: 'GET',
      headers: {
        /* Accept: 'application/json',
          'Content-Type': 'application/json', */
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  }
}

const newsApi = new NewsApi(BASE_URI_DEV, API_KEY);

export default newsApi;
