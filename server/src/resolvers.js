module.exports = {
  Query: {
    joke: (_, { category }, { dataSources }) => dataSources.jokeAPI.getJoke({ category }),
    categories: (_, params, { dataSources }) => dataSources.jokeAPI.getCategories(),
  },
};
