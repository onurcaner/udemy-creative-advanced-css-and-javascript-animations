import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu11.module.scss';

export function Menu11({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu11Button>{label}</Menu11Button>
        </li>
      ))}
    </menu>
  );
}

function Menu11Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButton}>{children}</span>
      <span className={styles.backgroundTextWrapperOfMenu} aria-hidden>
        <span className={styles.backgroundTextOfMenu}>{children}</span>
      </span>
    </button>
  );
}
