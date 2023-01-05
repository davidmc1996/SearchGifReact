import { useState } from 'react';
import './App.css';
import ListGifs from './components/ListGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListGifs keyword='scarlett johansson'/>
      </section>
    </div>
  );
}

export default App;
