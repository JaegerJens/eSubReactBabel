import React from 'react';

export default class Tree extends React.Component {
    render() {
        const listData = this.props.data.map((entry) => <li>{entry}</li>);
        return <ul>{listData}</ul>;
    }
}