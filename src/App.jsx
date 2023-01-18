import './App.css';
import { Route, Link } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// https://www.youtube.com/watch?v=Wo7_OVtu1ls&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=6
// React Context Loader
// https://midu.dev/

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: 'width-provider',
        isSuscribed: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <h1>
            <Link to="/">My Gif App</Link>
          </h1>

          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
