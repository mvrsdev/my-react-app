import './HeaderComp.css';
import '../../App.css';

export const HeaderComp = () => {
  return (
    <header>
      <a href="index.com">Gmail</a>
      <a href="index.com">Imagens</a>
      <img
        className="filter-color dotted-menu"
        src="images/dotted-menu.svg"
        alt="Ícone de Menu"
        width="17px"
        height="17px"
      />
      <button id="login-button">Fazer login</button>
    </header>
  );
};
