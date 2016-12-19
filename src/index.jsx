import React from 'react';
import {render} from 'react-dom';

require('file-loader?name=index.html!./index.html')

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));