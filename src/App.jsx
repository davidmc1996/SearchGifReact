import './App.css';
import { Route, Link } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// https://youtu.be/VcxXipZg1-0?t=4764
// React Context Loader

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
