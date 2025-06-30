import { RefObject, createContext } from 'react';

export const ContextMenuContext = createContext<{
  isMenuOpen: boolean;
  anchorElementRef: RefObject<HTMLElement | null>;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
} | null>(null);
