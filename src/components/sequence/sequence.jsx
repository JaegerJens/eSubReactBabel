import React from 'react';
import Tree from '../tree/tree.jsx';

const data = ['m1', 'm2', 'm3', 'm4', 'm5'];

export default class Sequence extends React.Component {
    render() {
        return <div>
                    <h2>Sequence View</h2>
                    <Tree data={data} select="1" />
                </div>;
    }
}