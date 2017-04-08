import React from "react";

export const ListItem = ({number, value, onClick, isSelected}) => {

    const onClickHandler = () => onClick(number, value);

    if (isSelected) {

        return <li className="selected" onClick={onClickHandler}>{value}</li>;

    }

    return <li onClick={onClickHandler}>{value}</li>;

};

export default ListItem;
