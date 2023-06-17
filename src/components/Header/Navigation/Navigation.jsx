import { NavLink, Link } from 'react-router-dom';

export default function Navigation({ modalHandleFunctions }) {
  return (
    <nav className="header-navigation">
      <ul className="navigation-list">
        <li className="navigation-list__item">
          <NavLink
            className="navigation-list__link navigation-list__link-current"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="navigation-list__item">
          <NavLink className="navigation-list__link" to="/library">
            My library
          </NavLink>
        </li>
      </ul>
      <ul className="authorization">
        <li className="authorization__item">
          <button className="authorization__btn is-hidden js-log-out">
            Sign out &nbsp;
            <svg width="16" height="16">
              <use href="/src/images/icons.svg#icon-sign-out"></use>
            </svg>
          </button>
        </li>
        <li className="authorization__item">
          <button
            className="authorization__btn js-log-in"
            onClick={modalHandleFunctions.onLogInModalOpen}
          >
            <svg width="16" height="16">
              <use href="/src/images/icons.svg#icon-sign-in"></use>
            </svg>
            &nbsp; Log in
          </button>
        </li>
        <li className="authorization__item">
          <button
            type="button"
            className="authorization__btn js-sign-up"
            data-modal-open-reg
            onClick={modalHandleFunctions.signUpModalOpen}
          >
            Sign up
          </button>
        </li>
      </ul>
    </nav>
  );
}
