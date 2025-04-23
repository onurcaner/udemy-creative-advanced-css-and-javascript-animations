import { JSX, ReactNode } from 'react';

import styles from './Button12.module.scss';

export function Button12({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span aria-hidden>
        <span className={styles.disk1} />
        <span className={styles.disk2} />
        <span className={styles.disk3} />
        <span className={styles.disk4} />
        <span className={styles.disk5} />
        <span className={styles.disk6} />
      </span>
    </button>
  );
}
