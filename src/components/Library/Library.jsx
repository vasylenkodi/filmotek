import Watched from './Watched/Watched';
import Queue from './Queue/Queue';

export default function Library() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="section__title">Library</h1>
          <Watched />
        </div>
      </section>
    </main>
  );
}
