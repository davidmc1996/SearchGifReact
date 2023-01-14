import './App.css';
import ListGifs from './components/ListGifs';
import { Route, Link } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';

// https://youtu.be/2qgs7buSnHQ?t=1968
function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>
          <Link to="/">My Gif App</Link>
        </h1>

        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;
