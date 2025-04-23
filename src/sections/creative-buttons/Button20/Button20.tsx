import { JSX, ReactNode } from 'react';

import styles from './Button20.module.scss';

export function Button20({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.leftBackgroundFragment} aria-hidden />
      <span className={styles.rightBackgroundFragment} aria-hidden />
    </button>
  );
}
