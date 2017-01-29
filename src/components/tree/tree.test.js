import React from 'React';
import Tree, {ListItem} from './tree.jsx';
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

describe('ListItem component', () => {
    it('matches selected snapshot', () => {
        const props = {
            number: 3,
            value: 'id5424',
            onClick: () => console.log('click'),
            isSelected: true
        };
        expect(ListItem(props)).toMatchSnapshot();
    });
    it('matches unselected snapshot', () => {
        const props = {
            number: 4,
            value: 'id3424',
            onClick: () => console.log('click'),
            isSelected: false
        };
        expect(ListItem(props)).toMatchSnapshot();
    });
});