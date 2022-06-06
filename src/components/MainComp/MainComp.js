import './MainComp.css';
import '../../App.css';

export const MainComp = () => {
  return (
    <main>
      <img id="logo" className="logo-large" src="images/google-logo.svg" alt="Logo do Google" />
      <form action="">
        <div className="input-box">
          <input type="text" />
          <span className="material-icons md-dark">keyboard</span>
          <span className="material-icons md-dark">search</span>
        </div>
        <fieldset>
          <button type="submit">Pesquisa Google</button>
          <button>Estou com sorte</button>
        </fieldset>
      </form>
    </main>
  );
};
