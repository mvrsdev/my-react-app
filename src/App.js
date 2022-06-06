import './App.css';
import { HeaderComp } from 'components/HeaderComp/HeaderComp';
import { MainComp } from 'components/MainComp/MainComp';
import { FooterComp } from 'components/FooterComp/FooterComp';

function App() {
  return (
    <div>
      <HeaderComp />
      <MainComp />
      <FooterComp />
    </div>
  );
}

export default App;
