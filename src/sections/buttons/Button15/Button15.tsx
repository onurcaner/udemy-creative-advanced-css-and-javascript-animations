import { JSX, ReactNode } from 'react';

import styles from './Button15.module.scss';

export function Button15({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.background} aria-hidden />
      <span className={styles.inlineBorders} aria-hidden>
        <span />
        <span />
        <span />
      </span>
      <span className={styles.blockBorders} aria-hidden>
        <span />
        <span />
        <span />
      </span>
    </button>
  );
}
