import { JSX } from 'react';
import { Outlet } from 'react-router';

import { PageNavigation } from '../components/PageNavigation/PageNavigation';

export function RootLayout(): JSX.Element {
  return (
    <>
      <PageNavigation />
      <Outlet />
    </>
  );
}
