import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-header">
          <h1>Join our community</h1>
          <h2>30-day, hassle-free money back guarantee</h2>
          <p>
            Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers
            who are serious about honing their skills.
          </p>
        </div>
        <div className="card-content">
          <div className="card-content-left">
            <h1>Monthly Subscription</h1>
            <h1 className="preco">$29 <span>per month</span></h1>
            <p>Full access for less than $1 a day</p>
            <a>Sign Up</a>
          </div>
          <div className="card-content-right">
            <h1>Why Us</h1>
            <p>
              Tutorials by industry experts Peer and expert code review Coding exercises Access to our GitHub
              reposCommunity forum Flashcard decks New videos every week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;