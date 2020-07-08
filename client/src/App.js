import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CodeList from './components/CodeList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Calls loadUser when app mounts
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      // Provides access to state from components
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <ItemModal />
            <CodeList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
