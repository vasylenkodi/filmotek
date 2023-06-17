import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=959330b1b48c95e1fde96a992bbede29';
const genresUrl =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=959330b1b48c95e1fde96a992bbede29&language=en-US';
const searchUrl =
  'https://api.themoviedb.org/3/search/movie?api_key=959330b1b48c95e1fde96a992bbede29';

const fetchFilms = createAsyncThunk(
  'films/fetchHomePage',
  async (_, thunkAPI) => {
    try {
      const arrayOfUrls = [baseUrl, genresUrl];
      const promises = arrayOfUrls.map(async url => {
        const response = await fetch(url);
        return response.json();
      });
      const data = await Promise.all(promises);
      const [fetchedFilms, genres] = data;
      const filmsWithGenres = arrangeGenres(
        fetchedFilms.results,
        genres.genres
      );
        const arrayOfFilms = getReleaseYear(filmsWithGenres);
      return {
        arrayOfFilms,
        totalPages: data[0].total_pages,
      };
    } catch (error) {
      return error.message;
    }
  }
);

const onPageChange = createAsyncThunk(
  'films/changePage',
  async (page, thunkAPI) => {
    try {
      const urlForFetch = `${baseUrl}&page=${page}`;
      const arrayOfUrls = [urlForFetch, genresUrl];
      const promises = arrayOfUrls.map(async url => {
        const response = await fetch(url);
        return response.json();
      });
      const data = await Promise.all(promises);
      const [fetchedFilms, genres] = data;
      const filmsWithGenres = arrangeGenres(
        fetchedFilms.results,
        genres.genres
      );
      const arrayOfFilms = getReleaseYear(filmsWithGenres);
      return { arrayOfFilms, page };
    } catch (error) {
      return error.message;
    }
  }
);

const onFilmsSearch = createAsyncThunk(
  'films/searchForFilms',
  async (key, thunkAPI) => {
    try {
      const urlForSearch = `${searchUrl}&query=${key}`;
      const arrayOfUrls = [urlForSearch, genresUrl];
      const promises = arrayOfUrls.map(async url => {
        const response = await fetch(url);
        return response.json();
      });
      const data = await Promise.all(promises);
      const [fetchedFilms, genres] = data;
      const filmsWithGenres = arrangeGenres(
        fetchedFilms.results,
        genres.genres
      );
        const arrayOfFilms = getReleaseYear(filmsWithGenres);
        
      return {
        arrayOfFilms,
        totalPages: data[0].total_pages,
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const films = {
  fetchFilms,
  onPageChange,
  onFilmsSearch,
};

function arrangeGenres(films, genres) {
  const arrangedGenres = films.map(film => {
    const res = film.genre_ids.map(
      genreId => genres.find(genre => genre.id === genreId).name
    );
    return res;
  });
  for (let i = 0; i < films.length; i += 1) {
    films[i].genres = arrangedGenres[i].join(', ');
  }
  return films;
}

function getReleaseYear(films) {
  return films.map(film => {
    film.releaseYear = film.release_date.slice(0, 4);
    return film;
  });
}
