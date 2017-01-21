import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Hierarchy from '../hierarchy/container.js'
import Sequence  from '../sequence/container.js';
import Document from '../document/document.jsx';
import Attribute from '../attribute/attribute.jsx';

require('./mainview.css');

const combine = (a, b) => Object.assign({}, a, b);
const Width = w => { return { width: w + "vw" }};
const Height = h => { return { height: h + "vh" }};
const Background = c => {return {backgroundColor: c}};

const calculateStyle = (style) => {
    const colors = style.colors;
    const layout = style.layout;
    return {
        header: combine(Background(colors.header), Height(layout.modules.header.height)),
        footer: combine(Background(colors.footer), Height(layout.modules.footer.height)),
        hierarchy: combine(Background(colors.hierarchy), Height(layout.modules.hierarchy.height)),
        sequence: combine(Background(colors.sequence), Height(layout.modules.sequence.height)),
        document: combine(Background(colors.document), Height(layout.modules.document.height)),
        attribute: combine(Background(colors.attribute), Height(layout.modules.attribute.height)),
        leftSide: Width(layout.leftside),
        rightSide: Width(layout.rightside)
    };
};

const MainView = (styleConfig) => {
    const style = calculateStyle(styleConfig);
    return (
        <div id="mainview" className="layout-grid-vertical">
            <div className="container" style={style.header}><Header /></div>
            <div className="layout-grid-horizontal">
                <div className="layout-grid-vertical" style={style.leftSide}>
                    <div className="container" style={style.hierarchy}><Hierarchy /></div>
                    <div className="container" style={style.sequence}><Sequence /></div>
                </div>
                <div className="layout-grid-vertical" style={style.rightSide}>
                    <div className="container" style={style.document}><Document /></div>
                    <div className="container" style={style.attribute}><Attribute /></div>
                </div>
            </div>
            <div className="container" style={style.footer}><Footer /></div>
        </div>
    );
}

export default MainView;