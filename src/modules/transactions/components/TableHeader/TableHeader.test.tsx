import { render } from '@testing-library/react';
import TableHeader from './index';

describe('TableHeader', () => {
  it('should render a list of typography provided by the props', () => {
    const tableHeaderTitles = ['UserID', 'GBP', 'USD', 'EUR', 'Last Activity'];
    const { getByText } = render(
      <TableHeader tableHeaderTitles={tableHeaderTitles} />,
    );
    tableHeaderTitles.forEach((title) => {
      expect(getByText(title)).not.toBeNull();
    });
  });
});
