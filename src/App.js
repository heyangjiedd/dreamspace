import React, { Component } from 'react';
import cssStyles from './App.css';
import lessStyles from './App.less';
import { Button } from 'antd-mobile';

class App extends Component {
  render() {
      console.log(cssStyles)
      console.log(lessStyles)
    return (
      <div className={`${cssStyles.App} ${lessStyles.App}`}>
          <Button type='primary'>按钮</Button>
      </div>
    );
  }
}

export default App;
