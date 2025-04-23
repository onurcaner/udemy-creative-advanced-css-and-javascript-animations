import { JSX, ReactNode } from 'react';

import styles from './Button23.module.scss';

export function Button23({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div>
      <button className={styles.button}>
        <span className={styles.contentWrapper}>{children}</span>

        <span className={styles.glowingBackground} aria-hidden />
        <span className={styles.normalBackground} aria-hidden />
        <span aria-hidden>
          <span className={styles.topGlowingStick} />
          <span className={styles.bottomGlowingStick} />
          <span className={styles.leftGlowingStick} />
          <span className={styles.rightGlowingStick} />
        </span>
      </button>
    </div>
  );
}
