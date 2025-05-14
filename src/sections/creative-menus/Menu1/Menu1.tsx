import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu1.module.scss';

export function Menu1({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu1Button>{label}</Menu1Button>
        </li>
      ))}
    </menu>
  );
}

function Menu1Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButton}>{children}</span>
      <span className={styles.topBorderOfButton} aria-hidden />
      <span className={styles.bottomBorderOfButton} aria-hidden />
    </button>
  );
}
