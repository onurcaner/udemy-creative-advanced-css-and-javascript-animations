import { JSX, ReactNode } from 'react';

import styles from './Button6.module.scss';

export function Button6({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.swipingLine} aria-hidden />
    </button>
  );
}
