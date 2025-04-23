import { JSX, ReactNode } from 'react';

import styles from './Button4.module.scss';

export function Button4({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.borderBackground} aria-hidden />
    </button>
  );
}
