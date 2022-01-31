import { render } from '@testing-library/react';
import Selection from './index';

const mockOnChange = jest.fn();

const renderSelection = () => {
  return render(<Selection onChangeSelect={() => mockOnChange} />);
};
describe('Selection', () => {
  it('should render the item as expected', () => {
    const { getByDisplayValue } = renderSelection();
    expect(getByDisplayValue('None')).not.toBeNull();
  });
  it('should change the value after pressing on the selection', () => {
    const selection = renderSelection();
  });
});
