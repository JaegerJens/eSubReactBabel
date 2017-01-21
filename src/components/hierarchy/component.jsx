import React from 'react';
import Tree from '../tree/tree.jsx';

const Hierarchy = ({data, selected, onSelect}) => (
    <div>
        <h2>Hierarchy View</h2>
        <Tree data={data} select={selected} onClick={onSelect}/>
    </div>
);

export default Hierarchy;