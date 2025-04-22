import { JSX, ReactNode } from 'react';

import styles from './Button5.module.scss';

export function Button5({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.staticContentWrapper}>{children}</span>
      <span className={styles.slidingContentWrapper} aria-hidden>
        {children}
      </span>
    </button>
  );
}
