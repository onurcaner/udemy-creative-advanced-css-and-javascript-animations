import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu10.module.scss';

export function Menu10({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu10Button>{label}</Menu10Button>
        </li>
      ))}
    </menu>
  );
}

function Menu10Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButton1}>{children}</span>
      <span className={styles.contentWrapperOfButton2} aria-hidden>
        {children}
      </span>
      <span className={styles.contentWrapperOfButton3} aria-hidden>
        {children}
      </span>
    </button>
  );
}
