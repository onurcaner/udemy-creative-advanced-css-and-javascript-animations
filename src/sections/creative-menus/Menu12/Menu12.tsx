import { ReactElement, ReactNode } from 'react';

import { MenuProps } from '../_types/MenuProps';

import styles from './Menu12.module.scss';

export function Menu12({
  collectionOfMenuButtonAttributes,
}: MenuProps): ReactElement {
  return (
    <menu className={styles.menu}>
      {collectionOfMenuButtonAttributes.map(({ label }) => (
        <li key={label}>
          <Menu12Button>{label}</Menu12Button>
        </li>
      ))}
    </menu>
  );
}

function Menu12Button({ children }: { children: ReactNode }): ReactElement {
  return (
    <button className={styles.button}>
      <span className={styles.contentWrapperOfButtonOnNotHover}>
        {children}
      </span>
      <span
        className={styles.overflowClipperOfContentWrapperOfButtonOnHover}
        aria-hidden
      >
        <span className={styles.contentWrapperOfButtonOnHover}>{children}</span>
      </span>
      <span className={styles.caretSymbolOfButton} aria-hidden />
    </button>
  );
}
