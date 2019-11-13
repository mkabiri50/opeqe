import React from 'react';
import Categories from './components/Categories/Categories';
import ToolBar from './components/NavBar/ToolBar/ToolBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <ToolBar />
      <Categories />
    </div>
  );
}

export default App;
