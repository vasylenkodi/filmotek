import { useSelector } from 'react-redux';
import auth from 'redux/auth/selectors';
import AddButtons from './AddButtons/AddButtons';

export default function ModalWindow({ film, closeModal, backdropClickHandle }) {
  const {
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
    poster_path,
    id,
  } = film;

  const isLoggedIn = useSelector(auth.getIsLoggedIn);

  return (
    <div
      className="backdrop-movie js-backdrop-movie"
      data-modal
      onClick={backdropClickHandle}
    >
      <div className="modal-movie">
        <button
          className="btn-close js-btn-close-modal"
          aria-label="Close"
          onClick={closeModal}
        >
          <svg className="btn-close__icon" width="14" height="14">
            <use href="../../../images/icons.svg#icon-close"></use>
          </svg>
        </button>

        <div className="modal-card js-modal-card">
          <div className="modal-card__thumb-left">
            <img
              className="modal-card__img"
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title}
              data-id={id}
            />
            <a className="link-trailer js-iframe">
              <svg
                height="130"
                width="130"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 461.001 461.001"
                xmlSpace="preserve"
              >
                <path
                  fill="#f61c0d"
                  className="icon-youtube"
                  d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"
                />
              </svg>
            </a>
          </div>
          <div className="modal-card__thumb-right">
            <p className="thumb-right__title">{title}</p>
            <div className="thumb-right__details">
              <ul className="thumb-right__name-details">
                <li className="thumb-right__name-item">Vote / Votes</li>
                <li className="thumb-right__name-item">Popularity</li>
                <li className="thumb-right__name-item">Original Title</li>
                <li className="thumb-right__name-item">Genre</li>
              </ul>
              <ul className="thumb-right__value-details">
                <li className="thumb-right__value-item">
                  <span className="thumb-right__vote">{vote_average}</span>
                  <span className="thumb-right__delimiter">/</span>
                  <span className="thumb-right__votes">{vote_count}</span>
                </li>
                <li className="thumb-right__value-item">{popularity}</li>
                <li className="thumb-right__value-item">
                  <span>{original_title}</span>
                </li>
                <li className="thumb-right__value-item">{genres}</li>
              </ul>
            </div>
            <p className="thumb-right__about">About</p>
            <p className="thumb-right__overview">{overview}</p>
            {isLoggedIn ? <AddButtons /> : <p>Please, log in to use library</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
