import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu9.module.scss';

export function Menu9({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu9Button>{label}</Menu9Button>
        </li>
      ))}
    </menu>
  );
}

function Menu9Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButton}>{children}</span>

      <span className={styles.topLeftBorderWrapperOfButton} aria-hidden>
        <span className={styles.topBorderOfButton} />
        <span className={styles.leftBorderOfButton} />
      </span>

      <span className={styles.bottomRightBorderWrapperOfButton} aria-hidden>
        <span className={styles.bottomBorderOfButton} />
        <span className={styles.rightBorderOfButton} />
      </span>
    </button>
  );
}
