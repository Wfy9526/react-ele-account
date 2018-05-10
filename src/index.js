import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from '@/store/index';
import { AppContainer } from 'react-hot-loader';
import Route from './router/index';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


const render = Component => {
    ReactDOM.render(
      //绑定redux、热加载
      <Provider store={store}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Provider>,
      document.getElementById('root'),
    )
  }
  
  render(Route);

  // Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router/', () => {
      render(Route);
    })
  }

registerServiceWorker();
