import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu6.module.scss';

export function Menu6({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu6Button>{label}</Menu6Button>
        </li>
      ))}
    </menu>
  );
}

function Menu6Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButton1}>{children}</span>
      <span className={styles.contentWrapperOfButton2} aria-hidden>
        {children}
      </span>

      <span className={styles.backgroundOfButton} aria-hidden />
    </button>
  );
}
