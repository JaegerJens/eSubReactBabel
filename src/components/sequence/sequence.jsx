import React from 'react';
import Tree from '../tree/tree.jsx';

export default class Sequence extends React.Component {
    render() {
        return <div>
                    <h2>{this.props.dossier}</h2>
                    <Tree data={this.props.data} select={this.props.selected} />
                </div>;
    }
}