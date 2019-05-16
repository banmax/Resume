import React, { Component } from 'react';
import { Globalstyle } from './style';
import { GlobalstyleCss } from './statics/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <GlobalstyleCss />
        <Header />
      </div>
    );
  }
}

export default App;
