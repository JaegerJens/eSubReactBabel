import Attribute from "../attribute/attribute.jsx";
import Document from "../document/document.jsx";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import Hierarchy from "../hierarchy/container.js";
import React from "react";
import Sequence from "../sequence/container.js";

require("./mainview.css");

const combine = (first, second) => Object.assign({}, first, second);
const widthProp = (widthValue) => ({"width": `${widthValue}vw`});
const heightProp = (heightValue) => ({"height": `${heightValue}vh`});
const backgroundColor = (colorValue) => ({"backgroundColor": colorValue});

const calculateStyle = (style) => {

    const {colors, layout} = style;

    return {
        "attribute": combine(
                        backgroundColor(colors.attribute),
                        heightProp(layout.modules.attribute.height)),
        "document": combine(
                        backgroundColor(colors.document),
                        heightProp(layout.modules.document.height)),
        "footer": combine(
                        backgroundColor(colors.footer),
                        heightProp(layout.modules.footer.height)),
        "header": combine(
                        backgroundColor(colors.header),
                        heightProp(layout.modules.header.height)),
        "hierarchy": combine(
                        backgroundColor(colors.hierarchy),
                        heightProp(layout.modules.hierarchy.height)),
        "leftSide": widthProp(layout.leftside),
        "rightSide": widthProp(layout.rightside),
        "sequence": combine(
                        backgroundColor(colors.sequence),
                        heightProp(layout.modules.sequence.height))
    };

};

const MainView = (styleConfig) => {

    const style = calculateStyle(styleConfig);

    return (
        <div className="layout-grid-vertical" id="mainview">
            <div className="container" style={style.header}>
                <Header />
            </div>
            <div className="layout-grid-horizontal">
                <div className="layout-grid-vertical" style={style.leftSide}>
                    <div className="container" style={style.hierarchy}>
                        <Hierarchy />
                    </div>
                    <div className="container" style={style.sequence}>
                        <Sequence />
                    </div>
                </div>
                <div className="layout-grid-vertical" style={style.rightSide}>
                    <div className="container" style={style.document}>
                        <Document />
                    </div>
                    <div className="container" style={style.attribute}>
                        <Attribute />
                    </div>
                </div>
            </div>
            <div className="container" style={style.footer}>
                <Footer />
            </div>
        </div>
    );

};

export default MainView;
