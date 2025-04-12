import { JSX } from 'react';
import { NavLink, useLocation } from 'react-router';

import { routes } from '../../router/routes';

import styles from './PageNavigation.module.scss';

export function PageNavigation(): JSX.Element {
  const { pathname } = useLocation();

  const previousAndNextRoutes = [
    routes.findPrevious(pathname),
    routes.findNext(pathname),
  ].filter((route) => route !== undefined);

  return (
    <nav className={styles.nav}>
      <ol className={styles.list}>
        {previousAndNextRoutes.map(({ label, name, path }) => (
          <NavLinkItem key={name} label={label} path={path} />
        ))}
      </ol>
    </nav>
  );
}

function NavLinkItem({
  label,
  path,
}: {
  label: string;
  path: string;
}): JSX.Element {
  return (
    <li>
      <NavLink className={styles.link} to={path} replace>
        {label}
      </NavLink>
    </li>
  );
}
