import { JSX, ReactNode } from 'react';

import { useStateLocalStorage } from '../../hooks/useStateLocalStorage';
import { LocalStorageKeys } from '../../local-storage/LocalStorageKeys';
import { joinCssModuleStyles } from '../../utils/joinCssModuleStyles';

import styles from './AdjustableGrid.module.scss';
import { AdjustableGridContext } from './AdjustableGridContext';

export function AdjustableGridContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [columnCount, setColumnCount] = useStateLocalStorage(
    LocalStorageKeys.GridColumnCount,
    3,
  );
  const [alignItems, setAlignItems] = useStateLocalStorage<
    'center' | 'stretch'
  >(LocalStorageKeys.GridAlignItems, 'center');
  const [justifyItems, setJustifyItems] = useStateLocalStorage<
    'center' | 'stretch'
  >(LocalStorageKeys.GridJustifyItems, 'center');

  const gridClassName = joinCssModuleStyles(
    styles.displayGrid,
    columnCount === 1 && styles.templateColumns1,
    columnCount === 2 && styles.templateColumns2,
    columnCount === 3 && styles.templateColumns3,
    columnCount === 4 && styles.templateColumns4,
    columnCount === 6 && styles.templateColumns6,
    alignItems === 'center' && styles.alignItemsCenter,
    alignItems === 'stretch' && styles.alignItemsStretch,
    justifyItems === 'center' && styles.justifyItemsCenter,
    justifyItems === 'stretch' && styles.justifyItemsStretch,
  );

  return (
    <AdjustableGridContext
      value={{
        gridClassName,

        columnCount,
        rotateColumnCount() {
          if (columnCount === 1) setColumnCount(2);
          if (columnCount === 2) setColumnCount(3);
          if (columnCount === 3) setColumnCount(4);
          if (columnCount === 4) setColumnCount(6);
          if (columnCount === 6) setColumnCount(1);
        },

        alignItems,
        switchAlignItems() {
          if (alignItems === 'center') setAlignItems('stretch');
          if (alignItems === 'stretch') setAlignItems('center');
        },

        justifyItems,
        switchJustifyItems() {
          if (justifyItems === 'center') setJustifyItems('stretch');
          if (justifyItems === 'stretch') setJustifyItems('center');
        },
      }}
    >
      {children}
    </AdjustableGridContext>
  );
}
