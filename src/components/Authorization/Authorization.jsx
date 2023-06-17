import Login from './Login/Login';
import Signup from './Signup/Signup';

export default function Authorization() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="is-hidden authorization-title">Authorization</h1>
          <p className='authorize-message'>To use your personal film library, please log in or sign up!</p>
          <div className='authorization-container'>
            <Login />
            <Signup />
          </div>
        </div>
      </section>
    </main>
  );
}
