import React from 'react';

require('./tree.css');

const ListItem = props => {
    if (props.isSelected) {
        return <li className="selected">{props.value}</li>;
    } else {
        return <li>{props.value}</li>;
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
        const listData = this.props.data.map((entry, index) => <ListItem key={index} value={entry} isSelected={isSelected(index)}/>);
        return <ul>{listData}</ul>;
    }
}