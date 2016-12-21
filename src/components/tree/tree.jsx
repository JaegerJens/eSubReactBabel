import React from 'react';

require('./tree.css');

const ListItem = props => {
    if (props.isSelected) {
        return <li className="selected" onClick={e => props.onClick(props.number)}>{props.value}</li>;
    } else {
        return <li onClick={e => props.onClick(props.number)}>{props.value}</li>;
    }
};

export default class Tree extends React.Component {
    render() {
        var selectedItem = Number(this.props.select);
        const isSelected = key => (key === selectedItem);
        const listData = this.props.data.map((entry, index) => <ListItem key={index} number={index} value={entry} isSelected={isSelected(index)} onClick={this.props.onClick}/>);
        return <ul>{listData}</ul>;
    }
}