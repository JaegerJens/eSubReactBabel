import {selectHierarchy} from './action.js'
import test from 'ava';

test('should return type HIERARCHY_SELECT', assert => {
    const actual = selectHierarchy(1, 'test');
    assert.is('HIERARCHY_SELECT', actual.type);
});
test('should return same id', assert => {
    const actual = selectHierarchy(5, 'test');
    assert.is(5, actual.id);
})
test('should return same name', assert => {
    const actual = selectHierarchy(7, 'some name');
    assert.is("some name", actual.name)
})
