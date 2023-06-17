import { useDispatch, useSelector } from 'react-redux';
import filmsSelectors from 'redux/films/selectors';
import { films } from 'redux/films/operations';
import PaginationPages from './PaginationPages/PaginationPages';

export default function Pagination() {
  const dispatch = useDispatch();

  const currentPage = useSelector(filmsSelectors.getCurrentPage);
  const filmsData = useSelector(filmsSelectors.getFilmsData);

  const moveToPage = event => {
    const clickedPage = event.target.textContent;
    dispatch(films.onPageChange(Number(clickedPage)));
  };

  const previousPage = () => {
    dispatch(films.onPageChange(Number(currentPage) - 1));
  };

  const moveToFirstPage = () => {
    dispatch(films.onPageChange(1));
  };

  const moveToLastPage = () => {
    dispatch(films.onPageChange(Number(filmsData.totalPages)));
  };

  const moveToNextPage = () => {
    dispatch(films.onPageChange(Number(currentPage) + 1));
  };

  const moveFivePagesForward = () => {
    dispatch(films.onPageChange(Number(currentPage) + 5));
  };

  return filmsData.totalPages > 1 ? (
    <div id="pagination" className="tui-pagination">
      {`${currentPage}` === `1` ? (
        <></>
      ) : (
        <>
          <button
            type="button"
            className="tui-page-btn tui-first"
            onClick={moveToFirstPage}
          >
            <span className="tui-ico-first">first</span>
          </button>
          <button
            type="button"
            className="tui-page-btn tui-prev"
            onClick={previousPage}
          >
            <span className="tui-ico-prev">prev</span>
          </button>
        </>
      )}
      <PaginationPages
        currentPage={Number(currentPage)}
        totalPages={filmsData.totalPages}
        moveToPage={moveToPage}
      />
      <button
        type="button"
        className="tui-page-btn tui-next-is-ellip tui-last-child"
        onClick={moveFivePagesForward}
      >
        <span className="tui-ico-ellip">...</span>
      </button>
      <button
        type="button"
        className="tui-page-btn tui-next"
        onClick={moveToNextPage}
      >
        <span className="tui-ico-next">next</span>
      </button>
      <button
        type="button"
        className="tui-page-btn tui-last"
        onClick={moveToLastPage}
      >
        <span className="tui-ico-last">last</span>
      </button>
    </div>
  ) : (
    <></>
  );
}
