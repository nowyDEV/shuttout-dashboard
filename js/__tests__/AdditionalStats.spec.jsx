import React from 'react';
import renderer from 'react-test-renderer';
import AdditionalStats from '../AdditionalStats';

test('AdditionalStats renders correctly', () => {
  const component = renderer.create(<AdditionalStats />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
