import { JSX, ReactNode } from 'react';

import { AdjustableGridContextProvider } from '../contexts/adjustable-grid/AdjustableGridContextProvider';

export function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <AdjustableGridContextProvider>{children}</AdjustableGridContextProvider>
  );
}
