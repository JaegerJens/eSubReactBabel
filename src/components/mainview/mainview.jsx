import React from 'react';

require('./mainview.css');

export default class MainView extends React.Component {
    render() {
        return <div className="mainview-layout">
            <div className="hierarchy-container">Hierarchy View</div>
            <div className="sequence-container">Sequence View</div>
            <div className="document-container">Document View</div>
            <div className="attribute-container">Attribute View</div>
        </div>
    }
}