import React from 'react';
import {render} from 'react-dom';
import configureStore from './configureStore.js';
import {Provider} from 'react-redux';
import MainView from './components/mainview/container.js';
import DevTools from './components/devtool/component.jsx';

require('file-loader?name=index.html!./index.html')
require('./style.css')

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <MainView />
      <DevTools />
    </div>
  </Provider>
);

render(<App/>, document.getElementById('app'));