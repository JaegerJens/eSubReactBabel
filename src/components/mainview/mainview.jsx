import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Hierarchy from '../../containers/hierarchy.js'
import Sequence  from '../../containers/sequence.js';
//import Sequence from '../sequence/sequence.jsx';
import Document from '../document/document.jsx';
import Attribute from '../attribute/attribute.jsx';

require('./mainview.css');

export default class MainView extends React.Component {
    render() {
        return <div className="mainview-layout">
            <div className="header-container"><Header /></div>
            <div className="hierarchy-container"><Hierarchy /></div>
            <div className="sequence-container"><Sequence /></div>
            <div className="document-container"><Document /></div>
            <div className="attribute-container"><Attribute /></div>
            <div className="footer-container"><Footer /></div>
        </div>
    }
}