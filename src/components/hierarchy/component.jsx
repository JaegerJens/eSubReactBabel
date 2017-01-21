import React from 'react';
import Tree from '../tree/tree.jsx';

const data = ['dossier 1', 'dossier 2', 'dossier 3', 'dossier 4'];

export default class Hierarchy extends React.Component {
    render() {
        console.log('hierarchy component props', this.props);
        return <div>
                    <h2>Hierarchy View</h2>
                    <Tree data={this.props.data} select={this.props.selected} onClick={this.props.onSelect}/>
               </div>;
    }
}