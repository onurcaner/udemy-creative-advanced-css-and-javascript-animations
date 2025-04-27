import { createContext } from 'react';

export const AdjustableGridContext = createContext<{
  gridClassName: string;

  rotateRowCount: () => void;
  rowCount: number;

  switchAlignItems: () => void;
  alignItems: string;

  switchJustifyItems: () => void;
  justifyItems: string;
} | null>(null);
