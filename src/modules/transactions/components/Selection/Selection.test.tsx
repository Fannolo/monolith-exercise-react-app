import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Selection from './index';

const mockOnChange = jest.fn();

const renderSelection = () => {
  return render(<Selection onChangeSelect={() => mockOnChange} />);
};
describe('Selection', () => {
  it('should render the item as expected', () => {
    renderSelection();
    expect(screen.getByLabelText('Select the transaction list')).not.toBeNull();
  });
  it('should change the value after pressing on the selection and one item internally', () => {
    renderSelection();
    fireEvent.mouseDown(screen.getByLabelText('Select the transaction list'));
    fireEvent.click(screen.getByText('Small'));
    fireEvent.click(screen.getByText('Medium'));
    expect(mockOnChange).toHaveBeenCalled();
    expect(
      screen.getByLabelText('Select the transaction list'),
    ).toHaveTextContent('Medium');
  });
});
