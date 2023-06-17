export default function PaginationPages({ currentPage, moveToPage, totalPages }) {
  const firstButtonNumber =
      currentPage / 5 < 1 ? 1 : `${currentPage / 5}`[0] * 5;
    const lastPageInPagination =
      firstButtonNumber + 6 > totalPages ? totalPages : firstButtonNumber + 5;
  const buttonsArray = [];

  for (let i = firstButtonNumber; i < lastPageInPagination + 1; i += 1) {
    if (i === currentPage) {
      buttonsArray.push(
        <button type="button" className="tui-page-btn tui-is-selected" key={i}>
          {i}
        </button>
      );
    } else {
      buttonsArray.push(
        <button
          type="button"
          className="tui-page-btn"
          key={i}
          onClick={moveToPage}
        >
          {i}
        </button>
      );
    }
  }
  return buttonsArray;
}
