import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Hierarchy from '../hierarchy/container.js'
import Sequence  from '../sequence/container.js';
import Document from '../document/document.jsx';
import Attribute from '../attribute/attribute.jsx';

require('./mainview.css');

const layout = {
    leftside: 40,
    rightside: 60,
    modules: {
        header: {height: 5},
        hierarchy: {height: 50},
        sequence: {height: 50},
        document: {height: 70},
        attribute: {height: 30},
        footer: {height: 5}
    }
};

const colors = {
    header: "#0074b2",
    footer: "#0074b2",
    hierarchy: "lightblue",
    sequence: "yellow",
    document: "lightcoral",
    attribute: "lightgreen"
};

const combine = (a, b) => Object.assign({}, a, b);
const Width = w => { return { width: w + "vw" }};
const Height = h => { return { height: h + "vh" }};
const Background = c => {return {backgroundColor: c}};

export default class MainView extends React.Component {
    render() {
        const headerStyle = combine(Background(colors.header), Height(layout.modules.header.height));
        const footerStyle = combine(Background(colors.footer), Height(layout.modules.footer.height));
        const hierarchyStyle = combine(Background(colors.hierarchy), Height(layout.modules.hierarchy.height));
        const sequenceStyle = combine(Background(colors.sequence), Height(layout.modules.sequence.height));
        const documentStyle = combine(Background(colors.document), Height(layout.modules.document.height));
        const attributeStyle = combine(Background(colors.attribute), Height(layout.modules.attribute.height));
        const leftSideStyle = Width(layout.leftside);
        const rightSideStyle = Width(layout.rightside);

        return <div id="mainview" className="layout-grid-vertical">
                    <div className="container" style={headerStyle}><Header /></div>
                    <div className="layout-grid-horizontal">
                        <div className="layout-grid-vertical" style={leftSideStyle}>
                            <div className="container" style={hierarchyStyle}><Hierarchy /></div>
                            <div className="container" style={sequenceStyle}><Sequence /></div>
                        </div>
                        <div className="layout-grid-vertical" style={rightSideStyle}>
                            <div className="container" style={documentStyle}><Document /></div>
                            <div className="container" style={attributeStyle}><Attribute /></div>
                        </div>
                    </div>
                    <div className="container" style={footerStyle}><Footer /></div>
                </div>
    }
}