import { render } from '@testing-library/react';
import AmountText from './index';

describe('Amount Text', () => {
  it('should render the component as expected', () => {
    const { getByText } = render(<AmountText amount={-853.62} />);
    expect(getByText('-853.62')).not.toBeNull();
  });
});
