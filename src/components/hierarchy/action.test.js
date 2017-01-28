import {selectHierarchy} from './action.js'

describe('hierarchy action', () => {
    it('should return type HIERARCHY_SELECT', () => {
        expect(selectHierarchy(1, 'test').type)
        .toEqual('HIERARCHY_SELECT');
    });
    it('should return same id', () => {
        expect(selectHierarchy(5, 'test').id)
        .toEqual(5);
    });
    it('should return same name', () => {
        expect(selectHierarchy(7, 'some name').name)
        .toEqual('some name');
    });
});
