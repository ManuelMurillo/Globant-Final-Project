import { render } from '@testing-library/react';
import { Docs } from './Docs';

test('renders learn react link', () => {
  const { getByText } = render(<Docs />);
  expect(getByText('Nutritional Calculator')).toBeInTheDocument();
  expect(getByText('Recipes:')).toBeInTheDocument();
});
