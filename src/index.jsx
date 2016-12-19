import React from 'react';
import {render} from 'react-dom';
import MainView from './components/mainview/mainview.jsx';

require('file-loader?name=index.html!./index.html')

class App extends React.Component {
  render () {
    return <div>
        <h1>eSUBmanager</h1>
        <MainView />
    </div>;
  }
}

render(<App/>, document.getElementById('app'));