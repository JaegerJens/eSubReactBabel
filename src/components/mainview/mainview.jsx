import React from 'react';

require('./mainview.css');

export default class MainView extends React.Component {
    render() {
        return <div className="mainview-layout">
            <div>Hierarchy View</div>
            <div>Sequence View</div>
            <div>Document View</div>
            <div>Attribute View</div>
        </div>
    }
}