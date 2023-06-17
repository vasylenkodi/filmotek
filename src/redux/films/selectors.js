const getFilms = state => state.films.films;
const getIsLoading = state => state.films.isLoading;
const getCurrentPage = state => state.films.page;
const getFilmsData = state => state.films.filmsData

const filmsSelectors = {
  getFilms,
  getIsLoading,
  getCurrentPage,
  getFilmsData
};

export default filmsSelectors;