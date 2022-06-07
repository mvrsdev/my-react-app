import { Button, Footer, Header, SearchInputField } from 'components';
import './SearchPage.scss';

const SearchPage = () => {
  const formSubmitHandler = (value) => {
    console.log('formSubmitHandler called!');
  }

  return (
    <>
      <Header />
      <main>
        <img
          id="logo"
          className="logo-large"
          src="images/google-logo.svg"
          alt="Logo do Google"
        />
        <form
          onSubmit={event => {
            event.preventDefault();
            formSubmitHandler && formSubmitHandler();
          }}
        >
          <SearchInputField />
          <fieldset>
            <Button type="submit">Pesquisa Google</Button>
            <Button>Estou com sorte</Button>
          </fieldset>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
