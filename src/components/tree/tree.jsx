import React from 'react';

const ListItem = props => <li>{props.value}</li>;

export default class Tree extends React.Component {
    render() {
        const listData = this.props.data.map((entry, index) => <ListItem key={index} value={entry} />);
        return <ul>{listData}</ul>;
    }
}