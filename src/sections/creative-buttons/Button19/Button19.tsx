import { JSX, ReactNode } from 'react';

import styles from './Button19.module.scss';

export function Button19({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.background1} aria-hidden />
      <span className={styles.background2} aria-hidden />
    </button>
  );
}
