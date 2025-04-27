import { JSX } from 'react';

import { useAdjustableGridContext } from '../../contexts/adjustable-grid/useAdjustableGridContext';

import styles from './AdjustableGridController.module.scss';

export function AdjustableGridController(): JSX.Element {
  const {
    alignItems,
    justifyItems,
    rotateRowCount,
    rowCount,
    switchAlignItems,
    switchJustifyItems,
  } = useAdjustableGridContext();

  return (
    <menu className={styles.menu}>
      <li>
        <button
          className={styles.button}
          onClick={rotateRowCount}
        >{`grid columns: ${rowCount.toString()}`}</button>
      </li>
      <li>
        <button
          onClick={switchAlignItems}
          className={styles.button}
        >{`align items: ${alignItems}`}</button>
      </li>
      <li>
        <button
          onClick={switchJustifyItems}
          className={styles.button}
        >{`justify items: ${justifyItems}`}</button>
      </li>
    </menu>
  );
}
