import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator'
import Weather from './Weather'

function App() {
  return (
    // <div style={{textAlign:'center'}}> - other method to use css in react
    <div className="App">
      <Weather/>
     

    </div>
  );
}

export default App;
