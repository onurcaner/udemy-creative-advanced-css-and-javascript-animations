import { createContext } from 'react';

export const AdjustableGridContext = createContext<{
  gridClassName: string;

  rotateColumnCount: () => void;
  columnCount: number;

  switchAlignItems: () => void;
  alignItems: string;

  switchJustifyItems: () => void;
  justifyItems: string;
} | null>(null);
