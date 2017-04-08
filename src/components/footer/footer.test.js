import React from "react";
import footer from "./footer.jsx";
import renderer from "react-test-renderer";

describe("Footer component", () => {

    it("matches snapshot", () => {

        expect(footer()).toMatchSnapshot();

    });

});


