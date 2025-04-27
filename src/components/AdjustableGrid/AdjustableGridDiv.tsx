import { JSX, ReactNode } from 'react';

import { useAdjustableGridContext } from '../../contexts/adjustable-grid/useAdjustableGridContext';

export function AdjustableGridDiv({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { gridClassName } = useAdjustableGridContext();

  return <div className={gridClassName}>{children}</div>;
}
