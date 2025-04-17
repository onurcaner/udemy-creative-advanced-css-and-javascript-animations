import { JSX, ReactNode } from 'react';

import styles from './Button12.module.scss';

export function Button12({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.disk1} aria-hidden />
      <span className={styles.disk2} aria-hidden />
      <span className={styles.disk3} aria-hidden />
      <span className={styles.disk4} aria-hidden />
      <span className={styles.disk5} aria-hidden />
      <span className={styles.disk6} aria-hidden />
    </button>
  );
}
