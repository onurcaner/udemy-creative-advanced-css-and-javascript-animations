import { JSX, ReactNode } from 'react';

import styles from './Button24.module.scss';

export function Button24({ children }: { children: ReactNode }): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapper}>{children}</span>

      <span className={styles.normalBackground} aria-hidden>
        <span className={styles.movingBackgroundFragment} />
      </span>

      <span className={styles.topGlowingStick} aria-hidden />
      <span className={styles.bottomGlowingStick} aria-hidden />
    </button>
  );
}
