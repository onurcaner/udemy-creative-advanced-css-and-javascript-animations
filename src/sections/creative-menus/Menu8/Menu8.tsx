import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu8.module.scss';

export function Menu8({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu8Button>{label}</Menu8Button>
        </li>
      ))}
    </menu>
  );
}

function Menu8Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButton}>{children}</span>

      <span className={styles.cornerOutlineWrapperOfButton} aria-hidden>
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index} className={styles.cornerOutlineOfButton}>
            <span className={styles.horizontalStickOfCornerOutlineOfButton} />
            <span className={styles.verticalStickOfCornerOutlineOfButton} />
          </span>
        ))}
      </span>
    </button>
  );
}
