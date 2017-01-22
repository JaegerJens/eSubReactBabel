import reduce from './reducer.js';
import test from 'ava';

test('initial state has 4 dossiers', assert => {
    var actual = reduce(undefined, {});
    assert.is(4, actual.data.length);
});
test('initial state selects first dossier', assert => {
    var actual = reduce(undefined, {});
    assert.is(1, actual.selected);
});
test('HIERARCHY_SELECT should change selected item', assert => {
    var state = {data: ['d1', 'd2'], selected: 1};
    var action = {type: 'HIERARCHY_SELECT', id: 3};
    var actual = reduce(state, action);
    assert.is(action.id, actual.selected);
})
test('HIERARCHY_SELECT should keep the data', assert => {
    var state = {data: ['t1', 't2', 't3'], selected: 2};
    var action = {type: 'HIERARCHY_SELECT', id: 1};
    var actual = reduce(state, action);
    assert.deepEqual(state.data, actual.data);
})
