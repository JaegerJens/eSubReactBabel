import React from "React";
import listItem from "./listItem.jsx";
import renderer from "react-test-renderer";

const emptyClickHandler = () => true;

describe("ListItem component", () => {

    it("matches selected snapshot", () => {

        const props = {
            "isSelected": true,
            "number": 3,
            "onClick": emptyClickHandler,
            "value": "id5424"
        };

        expect(listItem(props)).toMatchSnapshot();

    });
    it("matches unselected snapshot", () => {

        const props = {
            "isSelected": false,
            "number": 4,
            "onClick": emptyClickHandler,
            "value": "id3424"
        };

        expect(listItem(props)).toMatchSnapshot();

    });

});
