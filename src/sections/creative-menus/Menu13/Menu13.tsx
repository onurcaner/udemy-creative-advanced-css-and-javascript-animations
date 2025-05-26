import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu13.module.scss';

export function Menu13({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu13Button>{label}</Menu13Button>
        </li>
      ))}
    </menu>
  );
}

function Menu13Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.normalContentWrapperOfButton}>{children}</span>
      <span className={styles.glowingContentWrapperOfButton} aria-hidden>
        {children}
      </span>
    </button>
  );
}
