import { JSX, ReactNode } from 'react';

import styles from './Button21.module.scss';

export function Button21({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.background} aria-hidden />
      <span className={styles.poppingBackground} aria-hidden />
    </button>
  );
}
