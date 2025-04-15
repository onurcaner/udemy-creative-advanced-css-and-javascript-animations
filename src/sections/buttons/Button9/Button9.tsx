import { JSX, ReactNode } from 'react';

import styles from './Button9.module.scss';

export function Button9({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.hoverBackground} aria-hidden />
      <span className={styles.normalBackground} aria-hidden />
    </button>
  );
}
