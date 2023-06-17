export default function AddButtons() {
    return (
      <div className="modal-card__btn-wrap">
        <button
          className="modal-card__watched-btn js-add-watched-btn"
          data-name="watch"
        >
          Add to watched
        </button>
        <button
          className="modal-card__queue-btn js-add-queue-btn"
          data-name="queue"
        >
          Add to queue
        </button>
      </div>
    );
}