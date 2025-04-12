import { JSX } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { RootLayout } from '../layouts/RootLayout';
import { ButtonsPage } from '../pages/ButtonsPage/ButtonsPage';
import { ImagesPage } from '../pages/ImagesPage';
import { SandboxPage } from '../pages/SandboxPage/SandboxPage';

import { RouteNames, routes } from './routes';

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={<Navigate to={routes.get(RouteNames.Sandbox).path} />}
          />
          <Route
            path={routes.get(RouteNames.Sandbox).path}
            element={<SandboxPage />}
          />
          <Route
            path={routes.get(RouteNames.Buttons).path}
            element={<ButtonsPage />}
          />
          <Route
            path={routes.get(RouteNames.Images).path}
            element={<ImagesPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
