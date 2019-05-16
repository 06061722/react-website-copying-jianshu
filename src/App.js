import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { ResetCSS } from './style'
import { IconFont } from './statics/iconfont/iconfont'
import Header from './common/header'

function App () {
  return (
    <div>
      <ResetCSS />
      <IconFont />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
