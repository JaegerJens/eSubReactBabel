import React from "react";
import Tree from "../tree/tree.jsx";

const title = "Hierarchy View";

const Hierarchy = ({data, selected, onSelect}) => (
    <div>
        <h2>{title}</h2>
        <Tree data={data} onClick={onSelect} select={selected} />
    </div>
);

export default Hierarchy;
