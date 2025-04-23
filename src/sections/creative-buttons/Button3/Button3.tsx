import { JSX, ReactNode } from 'react';

import styles from './Button3.module.scss';

export function Button3({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.movingHorizontalBackground} aria-hidden />
      <span className={styles.movingVerticalBackground} aria-hidden />
      <span className={styles.normalBackground} aria-hidden />
    </button>
  );
}
