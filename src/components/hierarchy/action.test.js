import {selectHierarchy} from "./action.js";

describe("hierarchy action", () => {

    it("should return type HIERARCHY_SELECT", () => {

        const first = 1;

        expect(selectHierarchy(first, "test").type).
            toEqual("HIERARCHY_SELECT");

    });

    it("should return same id", () => {

        const input = 5;

        expect(selectHierarchy(input, "test").id).
            toEqual(input);

    });

    it("should return same name", () => {

        const index = 7;

        expect(selectHierarchy(index, "some name").name).
            toEqual("some name");

    });

});
