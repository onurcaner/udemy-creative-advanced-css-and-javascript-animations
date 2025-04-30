import { JSX } from 'react';
import { NavLink, useLocation } from 'react-router';

import { routes } from '../../router/routes';

import styles from './PageNavigation.module.scss';

export function PageNavigation(): JSX.Element {
  const { pathname } = useLocation();

  const thisRoute = routes.find(pathname);
  const previousRoute = routes.findPrevious(pathname);
  const nextRoute = routes.findNext(pathname);

  return (
    <nav className={styles.nav}>
      {previousRoute && (
        <NavLink className={styles.link} to={previousRoute.path}>
          {previousRoute.label}
        </NavLink>
      )}

      {thisRoute && <h1 className={styles.pageTitle}>{thisRoute.label}</h1>}

      {nextRoute && (
        <NavLink className={styles.link} to={nextRoute.path}>
          {nextRoute.label}
        </NavLink>
      )}
    </nav>
  );
}
