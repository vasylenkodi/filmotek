import { createSlice } from '@reduxjs/toolkit';
import { films } from './operations';

const filmsInitialState = {
  films: [],
  filmsData: {
    totalPages: null,
  },
  page: 1,
  isLoading: false,
  errorMessage: null,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState: filmsInitialState,
  extraReducers: {
    [films.fetchFilms.pending](state, action) {
      state.isLoading = true;
    },
    [films.fetchFilms.fulfilled](state, action) {
      state.films = action.payload.arrayOfFilms;
      state.filmsData.totalPages = action.payload.totalPages;
      state.isLoading = false;
    },
    [films.fetchFilms.rejected](state, action) {
      state.isLoading = false;
      state.films.errorMessage = action.payload;
    },
    [films.onPageChange.pending](state, action) {
      state.isLoading = true;
    },
    [films.onPageChange.fulfilled](state, action) {
      state.isLoading = false;
      state.films = action.payload.arrayOfFilms;
      state.page = action.payload.page;
    },
    [films.onPageChange.rejected](state, action) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [films.onFilmsSearch.pending](state, action) {
      state.isLoading = true;
    },
    [films.onFilmsSearch.fulfilled](state, action) {
      state.isLoading = false;
      state.films = action.payload.arrayOfFilms;
      state.filmsData.totalPages = action.payload.totalPages;
    },
    [films.onFilmsSearch.rejected](state, action) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const filmsReducer = filmsSlice.reducer;
