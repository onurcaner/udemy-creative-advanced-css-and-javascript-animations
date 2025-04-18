import { JSX, ReactNode } from 'react';

import styles from './Button17.module.scss';

export function Button17({ children }: { children: ReactNode }): JSX.Element {
  const isChildrenString = typeof children === 'string';

  return (
    <button className={styles.button}>
      {isChildrenString && (
        <span className={styles.contentWrapper}>
          <span>{children.slice(0, 1)}</span>
          <span>{children.slice(1)}</span>
        </span>
      )}
      {!isChildrenString && (
        <span className={styles.contentWrapper}>{children}</span>
      )}

      <span className={styles.normalBackground} aria-hidden />
      <span className={styles.hoverBackground} aria-hidden />
    </button>
  );
}
