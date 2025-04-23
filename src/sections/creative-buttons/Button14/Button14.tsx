import { JSX, ReactNode } from 'react';

import styles from './Button14.module.scss';

export function Button14({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.backgroundWrapper} aria-hidden>
        <span className={styles.backgroundFragment1} />
        <span className={styles.backgroundFragment2} />
        <span className={styles.backgroundFragment3} />
        <span className={styles.backgroundFragment4} />
      </span>
    </button>
  );
}
