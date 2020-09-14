import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // , { mode: 'no-cors' }
  async function apiCall(url) {
    let response = await fetch(url)
    console.log(response.status)

    if (response.status === 200) {
      let data = await response.json()
      console.log(data)
      return data
    }
  }
  apiCall('https://jsonplaceholder.typicode.com/todos/1')


  fetch('https://jsonplaceholder.typicode.com/todos/10000000')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((e) => { console.error(e) })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
