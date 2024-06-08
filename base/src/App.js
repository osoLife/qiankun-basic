import { BrowserRouter, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/react">react </Link>
        <Link to="/vue">vue</Link>
      </BrowserRouter>
      <div id="container">
      </div>
    </div>
  );
}

export default App;
