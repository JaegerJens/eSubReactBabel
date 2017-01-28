import React from 'react';
import Footer from './footer.jsx';
import renderer from 'react-test-renderer';

describe('Footer component', () => {
    it('matches snapshot', () => {
        expect(Footer()).toMatchSnapshot();
    });
});


