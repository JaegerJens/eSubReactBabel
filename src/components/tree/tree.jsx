import React from 'react';

require('./tree.css');

const ListItem = props => {
    const onClickHandler = e => props.onClick(props.number, props.value);
    if (props.isSelected) {
        return <li className="selected" onClick={onClickHandler}>{props.value}</li>;
    } else {
        return <li onClick={onClickHandler}>{props.value}</li>;
    }
};

export default class Tree extends React.Component {
    render() {
        const isSelected = key => (key === this.props.select);
        const listData = this.props.data.map(
            (entry, index) =>
                <ListItem key={index} number={index} value={entry} isSelected={isSelected(index)} onClick={this.props.onClick}/>
        );
        return <ul>{listData}</ul>;
    }
}