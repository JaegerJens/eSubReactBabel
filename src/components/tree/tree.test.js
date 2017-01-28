import React from 'React';
import Tree from './tree.jsx';
import renderer from 'react-test-renderer';

describe('Tree component', () => {
    it('matches snapshot', () => {
        const props = {
            select: 2,
            data: ['a', 'b', 'c'],
            onClick: 'onClick function'
        };
        expect(Tree(props)).toMatchSnapshot();
    });
});