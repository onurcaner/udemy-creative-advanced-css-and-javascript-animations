import { JSX, ReactNode } from 'react';

import styles from './Button1.module.scss';

export function Button1({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span aria-invalid className={styles.rotatingBackgroundTopLeft} />
      <span aria-invalid className={styles.rotatingBackgroundBottomRight} />
      <span aria-invalid className={styles.staticBackground} />
    </button>
  );
}
