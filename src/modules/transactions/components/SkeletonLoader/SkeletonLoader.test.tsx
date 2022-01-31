import { render } from '@testing-library/react';
import SkeletonLoader from './index';

describe('SkeletonLoader', () => {
  it('should render the component as expected', () => {
    const { getByTestId } = render(<SkeletonLoader numberOfSkeletons={1} />);
    expect(getByTestId('skeleton-loader')).not.toBeNull();
  });
});
