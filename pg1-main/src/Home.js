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
                    AV1 -  Can you recognize people?
                </a>
            </p>
        </div>
        <div className="containerPrincipal">
            <p className="subTitulo">
                <a href="/av2" className="links">
                    AV2 -  Let's pack!
                </a>
            </p>
        </div>

      </div>
    </div>
  );
}