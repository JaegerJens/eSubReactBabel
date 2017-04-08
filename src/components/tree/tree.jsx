import ListItem from "./listItem.jsx";
import React from "react";

require("./tree.css");

const Tree = ({select, data, onClick}) => {

    const isSelected = (key) => key === select;
    const listData = data.map(
            (entry, index) =>
                <ListItem
                    isSelected={isSelected(index)}
                    key={index}
                    number={index}
                    onClick={onClick}
                    value={entry}
                />
    );


    return <ul>{listData}</ul>;

};

export default Tree;
