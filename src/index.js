import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '@/store/index';
import Route from './router/index';
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store} >
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
};
  
  render(Route);
  // Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept(Route, () => {
      render(Route);
    })
  }

registerServiceWorker();
