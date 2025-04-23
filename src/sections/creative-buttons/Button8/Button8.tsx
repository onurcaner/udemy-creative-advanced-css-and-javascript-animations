import { JSX, ReactNode } from 'react';

import styles from './Button8.module.scss';

export function Button8({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.normalContentWrapper}>{children}</span>
      <span className={styles.hoveredContentWrapper} aria-hidden>
        {children}
      </span>
    </button>
  );
}
