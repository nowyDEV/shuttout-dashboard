import React from 'react';
import renderer from 'react-test-renderer';
import TopMenu from '../TopMenu';

test('TopMenu renders correctly', () => {
  const component = renderer.create(<TopMenu />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
