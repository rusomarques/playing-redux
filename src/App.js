import React from 'react';
import Playing from './features/playing/Playing';
import NestedSelector from './features/playing/NestedSelector';
import ActionBar from './features/ActionBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActionBar />
        <p style={{ fontSize: '12px' }}>
          Mirar consola: al clickear Increnemtar C, hay render del componente NestedSelector? xd
        </p>
        <Playing />
        <NestedSelector />
      </header>
    </div>
  );
}

export default App;
