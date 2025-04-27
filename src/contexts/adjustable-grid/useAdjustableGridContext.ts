import { useContext } from 'react';

import { AdjustableGridContext } from './AdjustableGridContext';

export function useAdjustableGridContext() {
  const context = useContext(AdjustableGridContext);
  if (!context)
    throw new Error(
      'useAdjustableGridContext() is invoked outside of the <AdjustableGridContextProvider>',
    );

  return context;
}
