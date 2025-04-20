import { JSX, ReactNode } from 'react';

import styles from './Button20.module.scss';

export function Button20({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>
      <span aria-hidden>
        <span className={styles.leftBackgroundFragment} />
        <span className={styles.rightBackgroundFragment} />
      </span>
    </button>
  );
}
