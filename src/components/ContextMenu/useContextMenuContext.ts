import { useContext } from 'react';

import { ContextMenuContext } from './ContextMenuContext';

export function useContextMenuContext() {
  const context = useContext(ContextMenuContext);
  if (!context)
    throw new Error(
      'useContextMenuContext() is called outside of <ContextMenuContextProvider>',
    );

  return context;
}
