import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import filmsSelectors from 'redux/films/selectors';
import ModalWindow from '../ModalWindow/ModalWindow';
import Pagination from 'components/Pagination/Pagination';

export default function FilmsList() {
  const [filmToShow, setFilmToShow] = useState(null);

  const films = useSelector(filmsSelectors.getFilms);

  const cardClickHandler = event => {
    const filmId = event.currentTarget.dataset.id;
    setFilmToShow(getFilmFromStore(filmId));
  };

  const getFilmFromStore = filmId =>
    films.find(film => filmId === `${film.id}`);

  const closeModal = () => {
    setFilmToShow(null);
  };

    const backdropClickHandle = (event) => {
        if (event.target === event.currentTarget) {
            setFilmToShow(null);
        }
    }

  return (
    <>
      <ul className="cards__list js-cards-list js-modal-window">
        {films.map(film => (
          <li
            className="card__film"
            data-id={film.id}
            key={film.id}
            onClick={cardClickHandler}
          >
            <div className="thumb">
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt="poster"
              />
            </div>
            <div className="card__content">
              <h2 className="card__title">{film.title}</h2>
              <p className="card__text">
                <span className="genres">{film.genres}</span>|{' '}
                <span className="release">{film.releaseYear}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
      {filmToShow ? (
        <ModalWindow
          film={filmToShow}
          closeModal={closeModal}
          backdropClickHandle={backdropClickHandle}
        />
      ) : (
        <></>
          )}
          <Pagination />
    </>
  );
}
