import tree, {listItem} from "./tree.jsx";
import React from "React";
import renderer from "react-test-renderer";

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

