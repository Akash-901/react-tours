import React from 'react';
import './App.css';
import Reviews from './Reviews';


function App() {

  return (
    <main>
      <div className="title">
        <h1>Our Reviews</h1>
        <div className="underline"></div>
      </div>
      <Reviews />
    </main>
  );
}

export default App;
