import React from 'react';
import Playing from './features/playing/Playing';
import ChildrenSelector from './features/playing/ChildrenSelector';
import ActionBar from './features/ActionBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActionBar />
        <Playing />
        <ChildrenSelector />
      </header>
    </div>
  );
}

export default App;
