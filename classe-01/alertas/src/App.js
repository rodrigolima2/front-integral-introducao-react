import './App.css';

const close = 'assets/close.svg';
const cookie = 'assets/cookie.svg';
const alert = 'assets/alert.svg';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="btn-fechar">
          <img src={close} alt="Fechar" />
        </div>
        <img id="cookie" src={cookie} alt="Imagem de um Cookie" />
        <p id="card-1">Nós utilizamos cookies para melhorar nossa UX analytics e marketing</p>
        <a className="btn btn-vermelho">Tudo bem!</a>
      </div>
      <div className="card">
        <div className="btn-fechar">
          <img src={close} alt="Fechar" />
        </div>
        <img id="cookie" src={alert} alt="Imagem de uma Sirene" />
        <p id="card-2">Você será deslogado imediatamente!</p>
        <a className="btn btn-azul">Extender login</a>
      </div>
    </div>
  );
}

export default App;
