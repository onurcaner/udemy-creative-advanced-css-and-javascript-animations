import { JSX } from 'react';
import { Outlet } from 'react-router';

import { AdjustableGridController } from '../components/AdjustableGrid/AdjustableGridController';
import { PageNavigation } from '../components/PageNavigation/PageNavigation';

import { GlobalContextProvider } from './GlobalContextProvider';

export function RootLayout(): JSX.Element {
  return (
    <GlobalContextProvider>
      <PageNavigation />
      <AdjustableGridController />
      <Outlet />
    </GlobalContextProvider>
  );
}
