import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Hierarchy from '../../containers/hierarchy.js'
import Sequence  from '../../containers/sequence.js';
import Document from '../document/document.jsx';
import Attribute from '../attribute/attribute.jsx';

require('./mainview.css');

export default class MainView extends React.Component {
    render() {
        return <div id="mainview" className="layout-grid-vertical">
                    <div className="container header-container"><Header /></div>
                    <div id="content" className="layout-grid-horizontal">
                        <div className="layout-grid-vertical leftside">
                            <div className="container hierarchy-container"><Hierarchy /></div>
                            <div className="container sequence-container"><Sequence /></div>
                        </div>
                        <div className="layout-grid-vertical rightside">
                            <div className="container document-container"><Document /></div>
                            <div className="container attribute-container"><Attribute /></div>
                        </div>
                    </div>
                    <div className="container footer-container"><Footer /></div>
                </div>
    }
}