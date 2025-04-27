import { JSX, ReactNode, useState } from 'react';

import { joinCssModuleStyles } from '../../utils/joinCssModuleStyles';

import styles from './AdjustableGrid.module.scss';
import { AdjustableGridContext } from './AdjustableGridContext';

export function AdjustableGridContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [rowCount, setRowCount] = useState(3);
  const [alignItems, setAlignItems] = useState<'center' | 'stretch'>('center');
  const [justifyItems, setJustifyItems] = useState<'center' | 'stretch'>(
    'center',
  );

  const gridClassName = joinCssModuleStyles(
    styles.displayGrid,
    rowCount === 2 && styles.templateColumns2,
    rowCount === 3 && styles.templateColumns3,
    rowCount === 4 && styles.templateColumns4,
    rowCount === 6 && styles.templateColumns6,
    alignItems === 'center' && styles.alignItemsCenter,
    alignItems === 'stretch' && styles.alignItemsStretch,
    justifyItems === 'center' && styles.justifyItemsCenter,
    justifyItems === 'stretch' && styles.justifyItemsStretch,
  );

  return (
    <AdjustableGridContext
      value={{
        gridClassName,

        rowCount,
        rotateRowCount() {
          if (rowCount === 2) setRowCount(3);
          if (rowCount === 3) setRowCount(4);
          if (rowCount === 4) setRowCount(6);
          if (rowCount === 6) setRowCount(2);
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
