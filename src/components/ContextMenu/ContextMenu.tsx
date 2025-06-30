import {
  ReactElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';

import styles from './ContextMenu.module.scss';
import { useContextMenuContext } from './useContextMenuContext';

export function ContextMenu({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const menuRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const { isMenuOpen, anchorElementRef, closeMenu } = useContextMenuContext();

  useClickOutside({
    ref: menuRef,
    onClickOutside: closeMenu,
  });

  useEffect(() => {
    const handleScroll = () => {
      closeMenu();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [closeMenu]);

  useLayoutEffect(() => {
    if (!isMenuOpen) return;
    if (!menuRef.current) return;
    if (!anchorElementRef.current) return;

    const top = anchorElementRef.current.getBoundingClientRect().bottom + 16;
    const left =
      anchorElementRef.current.getBoundingClientRect().right -
      menuRef.current.getBoundingClientRect().width;

    setPosition({
      top,
      left,
    });
  }, [anchorElementRef, isMenuOpen]);

  if (!isMenuOpen) return <></>;
  return (
    <menu ref={menuRef} className={styles.menu} style={{ ...position }}>
      {children}
    </menu>
  );
}
