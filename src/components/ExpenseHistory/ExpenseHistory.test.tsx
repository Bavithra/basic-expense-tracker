import React from 'react';
import renderer from 'react-test-renderer';
import ExpenseHistory from './ExpenseHistory';

describe('ExpenseHistory Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ExpenseHistory />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
