import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import NasaContent from './components/NasaContent';
import Past from './components/Past';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Past} path="/past" />
        <Route component={Main} path="/" exact />
        <Route component={NasaContent} path="/content" />
      </div>
    </BrowserRouter>
  );
}

export default App;
