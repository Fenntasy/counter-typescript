import * as React from 'react';
import './App.css';
import Counter from './Counter';
const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Counter interval={1} />
      </div>
    );
  }
}

export default App;
