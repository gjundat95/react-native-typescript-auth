import React, { Component } from 'react';
import { Provider } from 'react-redux';
import StartComponent from './components/start.component';

import Store from './stores/store-super-credit';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <StartComponent/>
      </Provider>
    );
  }
}

export default App;