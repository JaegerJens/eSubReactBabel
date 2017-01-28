import reduce from './reducer.js';

describe('hierarchy reducer', () => {
    it('initial state has 4 dossiers', () => {
        expect(reduce(undefined, {}).data.length)
        .toEqual(4);
    });
    it('initial state selects first dossier', () => {
        expect(reduce(undefined, {}).selected)
        .toEqual(1);
    });
    it('action HIERARCHY_SELECT should change selected item', () => {
        var state = {data: ['d1', 'd2'], selected: 1};
        var action = {type: 'HIERARCHY_SELECT', id: 3};
        expect(reduce(state, action).selected)
        .toEqual(action.id);
    });
    it('HIERARCHY_SELECT should keep the data', () => {
        var state = {data: ['t1', 't2', 't3'], selected: 2};
        var action = {type: 'HIERARCHY_SELECT', id: 1};
        expect(reduce(state, action).data)
        .toEqual(state.data);
    });
});
