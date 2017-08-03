import React from 'react';
import renderer from 'react-test-renderer';
import BaseStats from '../BaseStats';

test('BaseStats renders correctly', () => {
  const component = renderer.create(<BaseStats />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
