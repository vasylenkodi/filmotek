import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { films } from 'redux/films/operations';
import FilmsList from './FilmsList/FilmsList';
import Login from 'components/Login/Login';
import Registration from 'components/Registration/Registration';
import ModalWindow from './ModalWindow/ModalWindow';
import Pagination from './Pagination/Pagination';
import Swiper from './Swiper/Swiper';

export default function Main({ modalState, modalHandleFunctions }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(films.fetchFilms());
  }, [dispatch]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="section__title">Popular movies</h1>
          <FilmsList />
          {modalState.logInOpen ? (
            <Login onModalClose={modalHandleFunctions.onLogInModalClose} />
          ) : (
            <></>
          )}
          {modalState.signUpOpen ? (
            <Registration
              onModalClose={modalHandleFunctions.signUpModalClose}
            />
          ) : (
            <></>
          )}
        </div>
      </section>
    </main>
  );
}

// если поиск ничего не нашел

{
  /* <div className="not-found visually-hidden">
  <img
    className="not-found_img"
    src="/src/images/not-found.png"
    alt="nothing found"
  />
</div>; */
}
