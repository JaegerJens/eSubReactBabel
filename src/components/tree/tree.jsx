import React from 'react';

require('./tree.css');

const ListItem = ({number, value, onClick, isSelected}) => {
    const onClickHandler = () => onClick(number, value);
    if (isSelected) {
        return <li className="selected" onClick={onClickHandler}>{value}</li>;
    } else {
        return <li onClick={onClickHandler}>{value}</li>;
    }
};

const Tree = ({select, data, onClick}) => {
    const isSelected = key => (key === select);
    const listData = data.map(
            (entry, index) =>
                <ListItem key={index} number={index} value={entry} isSelected={isSelected(index)} onClick={onClick}/>
    );
    return <ul>{listData}</ul>;
};

export default Tree;