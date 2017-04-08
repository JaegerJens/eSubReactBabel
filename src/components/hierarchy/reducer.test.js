import reduce from "./reducer.js";

/* eslint-disable no-undefined */
const unknown = undefined;
/* eslint-enable no-undefined */

describe("hierarchy reducer", () => {

    it("initial state has 4 dossiers", () => {

        const expected = 4;

        expect(reduce(unknown, {}).data.length).
            toEqual(expected);

    });

    it("initial state selects first dossier", () => {

        const expected = 1;

        expect(reduce(unknown, {}).selected).
            toEqual(expected);

    });

    it("action HIERARCHY_SELECT should change selected item", () => {

        const state = {
            "data": ["d1", "d2"],
            "selected": 1
        };
        const action = {
            "id": 3,
            "type": "HIERARCHY_SELECT"
        };

        expect(reduce(state, action).selected).
            toEqual(action.id);

    });

    it("HIERARCHY_SELECT should keep the data", () => {

        const state = {
            "data": ["t1", "t2", "t3"],
            "selected": 2
        };
        const action = {
            "id": 1,
            "type": "HIERARCHY_SELECT"
        };

        expect(reduce(state, action).data).
        toEqual(state.data);

    });

});
