export default function LibraryButtons() {
    return (
      <ul className="buttons js-buttons-library list">
        {' '}
        <li className="buttons-item">
          {' '}
          <button type="button" className="library-btn enabled-btn js-watched">
            {' '}
            Watched{' '}
          </button>{' '}
        </li>{' '}
        <li className="buttons-item">
          {' '}
          <button type="button" className="library-btn disabled-btn js-queue">
            {' '}
            Queue{' '}
          </button>{' '}
        </li>{' '}
      </ul>
    );
}