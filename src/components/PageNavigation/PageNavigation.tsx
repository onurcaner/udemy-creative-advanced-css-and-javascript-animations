import { JSX, RefObject } from 'react';
import { NavLink, useLocation } from 'react-router';

import { routes } from '../../router/routes';

import { ContextMenu } from '../ContextMenu/ContextMenu';
import { ContextMenuContextProvider } from '../ContextMenu/ContextMenuContextProvider';
import { useContextMenuContext } from '../ContextMenu/useContextMenuContext';

import styles from './PageNavigation.module.scss';

export function PageNavigation(): JSX.Element {
  return (
    <ContextMenuContextProvider>
      <PageNavigationMenu />
      <PageNavigation_ />
    </ContextMenuContextProvider>
  );
}

function PageNavigation_(): JSX.Element {
  const { pathname } = useLocation();

  const { openMenu, anchorElementRef } = useContextMenuContext();

  const thisRoute = routes.find(pathname);
  if (!thisRoute) throw new Error();

  return (
    <nav className={styles.nav}>
      <h1 className={styles.pageTitle}>{thisRoute.label}</h1>

      <button
        ref={anchorElementRef as RefObject<HTMLButtonElement | null>}
        className={styles.menuButton}
        onClick={openMenu}
      >
        {thisRoute.label}
      </button>
    </nav>
  );
}

function PageNavigationMenu(): JSX.Element {
  const { closeMenu } = useContextMenuContext();

  return (
    <ContextMenu>
      {routes.getAll().map((route) => (
        <li key={route.name}>
          <NavLink
            className={styles.menuLink}
            to={route.path}
            onClick={closeMenu}
          >
            {route.label}
          </NavLink>
        </li>
      ))}
    </ContextMenu>
  );
}
