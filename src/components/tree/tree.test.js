/* eslint-disable no-unused-vars */
import React from "React";
import renderer from "react-test-renderer";
import tree from "./tree.jsx";
/* eslint-enable no-unused-vars */

describe("Tree component", () => {

    it("matches snapshot", () => {

        const props = {
            "data": ["a", "b", "c"],
            "onClick": "onClick function",
            "select": 2
        };

        expect(tree(props)).toMatchSnapshot();

    });

});

