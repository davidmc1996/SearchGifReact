import './App.css';
import ListGifs from './components/ListGifs';
import { Route, Link } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>My Gif App</h1>
        <Link to="/gif/panda">Gifs de Pandas</Link> <br />
        <Link to="/gif/peru">Gifs de Peru</Link> <br />
        <Link to="/gif/ecuador">Gifs de Ecuador</Link> <br />
        <Link to="/gif/barbara+palvin">Gifs de Barbara Palvin</Link> <br />
        <Route path="/gif/:keyword" component={ListGifs} />
      </section>
    </div>
  );
}

export default App;
