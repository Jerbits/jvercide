---
to: src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.test.tsx
---
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { <%= h.capitalize(name) %> } from './<%= h.capitalize(name) %>'

afterEach(cleanup);

describe('<%= h.capitalize(name) %> component', () => {
    it('should', () => {
        // setup
        // const { getByText } = render(<<%= h.capitalize(name) %>  prop="prop" />);
        // test
        // expect(getByText('Button component prop')).toBeTruthy();
    });
})