import { JSX, ReactNode } from 'react';

import styles from './Button1.module.scss';

export function Button1({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span aria-invalid className={styles.dynamicBackgroundTopLeft} />
      <span aria-invalid className={styles.dynamicBackgroundBottomRight} />
      <span aria-invalid className={styles.staticBackground} />
    </button>
  );
}
