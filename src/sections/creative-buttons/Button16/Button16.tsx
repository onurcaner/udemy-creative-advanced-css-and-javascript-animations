import { JSX, ReactNode } from 'react';

import styles from './Button16.module.scss';

export function Button16({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.background} aria-hidden />
      <span aria-hidden>
        <span className={styles.movingBorderTop} />
        <span className={styles.movingBorderBottom} />
        <span className={styles.movingBorderLeft} />
        <span className={styles.movingBorderRight} />
      </span>
    </button>
  );
}
