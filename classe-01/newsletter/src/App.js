import './App.css';

const imagem = 'assets/quote.svg';

function App() {
  return (
    <div className="App">
      <div className="card card-1-tamanho card-white">
        <img src={imagem} alt="Aspas logo" />
        <p id="frase">
          Nascida e criada em Nova York. Atualmente morando em Haia, Holanda, após passagens por Paris e Amsterdã.
          Amante de viagens, aventura, natureza, cidade, vestidos e gatos.
        </p>
        <p id="autor">Tessa Jacobson</p>
      </div>
      <div className="card card-2-tamanho card-blue">
        <h2>Newsletter</h2>
        <h1>Se inscreva no newsletter!</h1>
        <p>Não perca nenhuma notícia urgente ou recurso novo.</p>
        <a>Se inscrever</a>
      </div>
    </div>
  );
}

export default App;
