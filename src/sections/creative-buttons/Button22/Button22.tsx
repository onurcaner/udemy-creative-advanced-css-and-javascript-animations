import { JSX, ReactNode } from 'react';

import styles from './Button22.module.scss';

export function Button22({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.movingBackground} aria-hidden />
      <span className={styles.normalBackground} aria-hidden />
    </button>
  );
}
