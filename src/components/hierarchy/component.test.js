/* eslint-disable no-unused-vars */
import React from "React";
import hierarchy from "./component.jsx";
import renderer from "react-test-renderer";
/* eslint-enable no-unused-vars */

describe("Hierarchy component", () => {

    it("matches snapshot", () => {

        const prop = {
            "data": ["a", "b", "c"],
            "onSelect": "onSelect function",
            "selected": 2
        };

        expect(hierarchy(prop)).toMatchSnapshot();

    });

});
