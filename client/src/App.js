import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CodeList from './components/CodeList';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <AppNavbar />
        <CodeList />
      </div>
    )
  }
}


export default App;
