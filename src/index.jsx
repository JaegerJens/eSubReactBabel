import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store.js';
import MainView from './components/mainview/mainview.jsx';

require('file-loader?name=index.html!./index.html')
require('./style.css')

class App extends React.Component {
  render () {
    return <Provider store={store}>
              <MainView />
           </Provider>;
  }
}

render(<App/>, document.getElementById('app'));