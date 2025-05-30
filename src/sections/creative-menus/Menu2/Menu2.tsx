import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu2.module.scss';

export function Menu2({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu2Button>{label}</Menu2Button>
        </li>
      ))}
    </menu>
  );
}

function Menu2Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButton}>{children}</span>

      <span className={styles.backgroundOfButton} aria-hidden />

      <span className={styles.topOutlineOfButton} aria-hidden />
      <span className={styles.bottomOutlineOfButton} aria-hidden />
      <span className={styles.leftOutlineOfButton} aria-hidden />
      <span className={styles.rightOutlineOfButton} aria-hidden />
    </button>
  );
}
