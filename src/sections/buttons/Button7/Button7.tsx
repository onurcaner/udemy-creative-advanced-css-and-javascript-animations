import { JSX, ReactNode } from 'react';

import styles from './Button7.module.scss';

export function Button7({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.firstContentWrapper}>{children}</span>
      <span className={styles.secondContentWrapper} aria-hidden>
        {children}
      </span>
      <span className={styles.staticBackground} aria-hidden />
    </button>
  );
}
