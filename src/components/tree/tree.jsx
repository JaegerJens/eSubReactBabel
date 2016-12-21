import React from 'react';

require('./tree.css');

const ListItem = props => {
    if (props.isSelected) {
        return <li className="selected" onClick={props.onClick}>{props.value}</li>;
    } else {
        return <li onClick={props.onClick}>{props.value}</li>;
    }
};

export default class Tree extends React.Component {
    render() {
        var selectedItem = Number(this.props.select);
        const isSelected = key => {
            if (!selectedItem) {
                return false;
            }
            return (key === selectedItem);
        }
        console.log('hierarchy component render', this.props);
        const listData = this.props.data.map((entry, index) => <ListItem key={index} value={entry} isSelected={isSelected(index)} onClick={this.props.onClick}/>);
        return <ul>{listData}</ul>;
    }
}