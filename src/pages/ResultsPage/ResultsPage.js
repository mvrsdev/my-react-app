import { Footer, Header, SearchInputField } from 'components';
import './ResultsPage.scss';

const ResultsPage = () => {
  const formSubmitHandler = value => {
    console.log('formSubmitHandler called!');
  };

  return (
    <>
      <header>
        <div className="header-row">
          <div className="left">
            <a href="index.html">
              <img id="logo" className="logo-small" src="images/google-logo.svg" alt="Logo do Google" />
            </a>
            <SearchInputField/>
          </div>
          <div className='right'>
            <Header/>
          </div>
        </div>
        {/* <nav>
          <ul>
            <li>
              <a href="index.com">
                <span className="material-icons md-dark md-18">search</span>
                Todas
              </a>
            </li>
            <li>
              <a href="index.com">
                <span className="material-icons md-dark md-18">image</span>
                Imagens
              </a>
            </li>
            <li>
              <a href="index.com">
                <span className="material-icons md-dark md-18">slideshow</span>
                Videos
              </a>
            </li>
            <li>
              <a href="index.com">
                <span className="material-icons md-dark md-18">newspaper</span>
                Notícias
              </a>
            </li>
            <li>
              <a href="index.com">
                <span className="material-icons md-dark md-18">className</span>
                Livros
              </a>
            </li>
            <li>
              <a href="index.com">
                <span className="material-icons md-dark md-18">more_vert</span>
                Mais
              </a>
            </li>
          </ul>
        </nav> */}
      </header>
      {/* <main>
        <section>
          <article>
            <ul>
              <li>
                <p className="link">https://loremipsum.com</p>
                <a href="index.com">
                  <h3>Novas tecnologias</h3>
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>
                  Proin iaculis tincidunt est, utviverra leo pellentesque vitae. Donec varius sodales elit sit amet
                  feugiat.
                </p>
              </li>
            </ul>
          </article>
        </section>
      </main> */}
      <Footer />
    </>
  );
};
export default ResultsPage;
