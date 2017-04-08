/* eslint-disable no-unused-vars */
import React from "react";
import footer from "./footer.jsx";
import renderer from "react-test-renderer";
/* eslint-enable no-unused-vars */

describe("Footer component", () => {

    it("matches snapshot", () => {

        expect(footer()).toMatchSnapshot();

    });

});


