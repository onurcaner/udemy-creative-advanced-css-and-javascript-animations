import { JSX } from 'react';

import { useAdjustableGridContext } from '../../contexts/adjustable-grid/useAdjustableGridContext';

import styles from './AdjustableGridController.module.scss';

export function AdjustableGridController(): JSX.Element {
  const {
    alignItems,
    columnCount,
    justifyItems,
    rotateColumnCount,
    switchAlignItems,
    switchJustifyItems,
  } = useAdjustableGridContext();

  return (
    <menu className={styles.menu}>
      <li>
        <button
          className={styles.button}
          onClick={rotateColumnCount}
        >{`grid columns: ${columnCount.toString()}`}</button>
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
