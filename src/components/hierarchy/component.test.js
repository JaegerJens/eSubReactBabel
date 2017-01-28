import React from 'React';
import Hierarchy from './component.jsx';
import renderer from 'react-test-renderer';

describe('Hierarchy component', () => {
    it('matches snapshot', () => {
        const prop = {
            data: ['a', 'b', 'c'],
            selected: 2,
            onSelect: "onSelect function"
        };
        expect(Hierarchy(prop)).toMatchSnapshot();
    });
});