import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu7.module.scss';

export function Menu7({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu7Button>{label}</Menu7Button>
        </li>
      ))}
    </menu>
  );
}

function Menu7Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButton}>{children}</span>

      <span className={styles.backgroundOfButton} aria-hidden />

      <span className={styles.topOutlineOfButton} aria-hidden />
      <span className={styles.bottomOutlineOfButton} aria-hidden />
    </button>
  );
}
