import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu4.module.scss';

export function Menu4({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu4Button>{label}</Menu4Button>
        </li>
      ))}
    </menu>
  );
}

function Menu4Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButton}>{children}</span>

      <span className={styles.leftUnderlineOfButton} aria-hidden />
      <span className={styles.rightUnderlineOfButton} aria-hidden />
    </button>
  );
}
