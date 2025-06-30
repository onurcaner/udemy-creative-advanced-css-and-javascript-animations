import { ReactElement, ReactNode, useRef, useState } from 'react';

import { ContextMenuContext } from './ContextMenuContext';

export function ContextMenuContextProvider({
  children,
  initialState = false,
}: {
  children: ReactNode;
  initialState?: boolean;
}): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(() => initialState);
  const ref = useRef<HTMLElement>(null);

  return (
    <ContextMenuContext
      value={{
        isMenuOpen,
        anchorElementRef: ref,
        closeMenu() {
          setIsMenuOpen(false);
        },
        openMenu() {
          setIsMenuOpen(true);
        },
        toggleMenu() {
          setIsMenuOpen((b) => !b);
        },
      }}
    >
      {children}
    </ContextMenuContext>
  );
}
