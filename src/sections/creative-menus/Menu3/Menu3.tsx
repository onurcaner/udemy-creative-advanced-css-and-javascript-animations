import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu3.module.scss';

export function Menu3({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu3Button>{label}</Menu3Button>
        </li>
      ))}
    </menu>
  );
}

function Menu3Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButton}>{children}</span>

      <span className={styles.backgroundFragmentWrapperOfButton} aria-hidden>
        {Array.from({ length: Number(styles.backgroundFragmentCount) }).map(
          (_, index) => (
            <span key={index} className={styles.backgroundFragmentOfButton} />
          ),
        )}
      </span>
    </button>
  );
}
