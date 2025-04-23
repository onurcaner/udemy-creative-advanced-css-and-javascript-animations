import { JSX, ReactNode } from 'react';

import styles from './Button10.module.scss';

export function Button10({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper1}>{children}</span>
      <span className={styles.contentWrapper2} aria-hidden>
        {children}
      </span>
      <span className={styles.contentWrapper3} aria-hidden>
        {children}
      </span>
    </button>
  );
}
