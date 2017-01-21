import React from 'react';
import Tree from '../tree/tree.jsx';

const Sequence = ({dossier, data, selected}) => (
    <div>
        <h2>{dossier}</h2>
        <Tree data={data} select={selected} />
    </div>
);

export default Sequence;