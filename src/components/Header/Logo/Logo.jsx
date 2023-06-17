import { NavLink } from "react-router-dom";

export default function Logo() {
    return (
      <div className="logo">
        <a href="./index.html" className="logo__site">
          <svg className="logo__svg" width="24" height="24">
            <use
              className="logo__icon"
              href="/src/images/icons.svg#icon-film"
            ></use>
          </svg>
          <span className="logo__name">Filmoteka</span>
        </a>
      </div>
    );
}