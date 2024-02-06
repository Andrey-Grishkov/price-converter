
const PRICE_CONVERTER_SERVER = 'http://localhost:3000/product'
//const PRICE_CONVERTER_SERVER = 'https://price-converter-8ji3uitng-andrey-grishkov.vercel.app/product'
const HEADERS = {
  'Content-Type': 'application/json',
};

class Api {
  _url;
  _headers;

  constructor(PRICE_CONVERTER_SERVER, HEADERS) {
    this._url = PRICE_CONVERTER_SERVER;
    this._headers = HEADERS;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status}`);
  }

  getProducts() {
    return fetch(`${this._url}`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  postProducts(data) {

    return fetch(`${this._url}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(
        data
      ),
      credentials: "include"
    }).then(this._checkResponse);
  }
}

const priceConverterApi = new Api(PRICE_CONVERTER_SERVER, HEADERS);

export default priceConverterApi;
