import { JSX, ReactNode } from 'react';

import styles from './Button19.module.scss';

export function Button19({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.background} aria-hidden />
      {<span className={styles.backgroundStick} aria-hidden />}
    </button>
  );
}
