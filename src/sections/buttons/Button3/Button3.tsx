import { JSX, ReactNode } from 'react';

import styles from './Button3.module.scss';

export function Button3({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>
      <span className={styles.dynamicHorizontalBackground} aria-hidden />
      <span className={styles.dynamicVerticalBackground} aria-hidden />
      <span className={styles.staticBackground} aria-hidden />
    </button>
  );
}
