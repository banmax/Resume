import React, { Component } from 'react';
import { Globalstyle } from './style';
import { GlobalstyleCss } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <GlobalstyleCss />
        <Provider store={store}>
          <Header />        
        </Provider>
      </div>
    );
  }
}

export default App;
