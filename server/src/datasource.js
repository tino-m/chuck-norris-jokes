const { RESTDataSource } = require('apollo-datasource-rest');

class JokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes/';
  }

  async getJoke({ category }) {
    const response = await this.get(`random?category=${category}`);
    return response;
  }

  async getCategories() {
    const response = await this.get(`categories`);
    const temp = {
      items: response,
      count: response.length,
    };
    console.log(temp);
    return temp;
  }
}

module.exports = JokeAPI;
