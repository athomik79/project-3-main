import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CodeList from './components/CodeList';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {
  render () {
    return (
      // Provides access to state from components
      <Provider store={store}>
        <div className="App">
        <AppNavbar />
        <CodeList />
      </div>
      </Provider>
    ); 
  }
}


export default App;
