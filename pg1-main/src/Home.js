import './App.css';
import Header from "./Header";

export default function Home(props) {
  return (
    <div>
      <Header />
      <div className='page'>
        <div className="containerPrincipal">
            <p className="subTitulo">
                <a href="/av1" className="links">
                    AV1 -  Parque
                </a>
            </p>
        </div>
        <div className="containerPrincipal">
            <p className="subTitulo">
                <a href="/av2" className="links">
                    AV2 -  Restaurante
                </a>
            </p>
        </div>
        <div className="containerPrincipal">
            <p className="subTitulo">
                <a href="/av3" className="links">
                    AV3 -  Casa
                </a>
            </p>
        </div>
        <div className="containerPrincipal">
            <p className="subTitulo">
                <a href="/av4" className="links">
                    AV4 -  Animais
                </a>
            </p>
        </div>
      </div>
    </div>
  );
}