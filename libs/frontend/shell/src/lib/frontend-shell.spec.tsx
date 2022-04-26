import { render } from '@testing-library/react';

import FrontendShell from './frontend-shell';

describe('FrontendShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendShell />);
    expect(baseElement).toBeTruthy();
  });
});
