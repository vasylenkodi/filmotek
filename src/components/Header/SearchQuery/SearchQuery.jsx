import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { films } from 'redux/films/operations';

export default function SearchQuery() {
  const [searchKey, setSearchKey] = useState('');

  const dispatch = useDispatch();

  const onInputChange = event => {
    setSearchKey(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    const searchValue = event.target.search.value;
    dispatch(films.onFilmsSearch(searchValue))
  };

  return (
    <form className="header__form js-header__form" onSubmit={onSubmit}>
      <div className="header__form-search">
        <input
          type="text"
          name="search"
          className="header__search header__input js-header__input"
          placeholder="Movie search"
          value={searchKey}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="header__search-btn"
          aria-label="Search"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 10.5002L8.32495 8.3252"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
