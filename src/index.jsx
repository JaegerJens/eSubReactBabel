import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index.js';
import MainView from './components/mainview/mainview.jsx';

require('file-loader?name=index.html!./index.html')
require('./style.css')

const store = createStore(reducer);

class App extends React.Component {
  render () {
    return <Provider store={store}>
              <MainView />
           </Provider>;
  }
}

render(<App/>, document.getElementById('app'));