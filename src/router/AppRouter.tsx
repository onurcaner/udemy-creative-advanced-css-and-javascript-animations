import { JSX } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { RootLayout } from '../layouts/RootLayout';
import { CreativeButtonsPage } from '../pages/CreativeButtonsPage/CreativeButtonsPage';
import { CreativeImageEffectsPage } from '../pages/CreativeImageEffectsPage/CreativeImageEffectsPage';
import { CreativeMenusPage } from '../pages/CreativeMenusPage/CreativeMenusPage';
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
            element={<CreativeButtonsPage />}
          />
          <Route
            path={routes.get(RouteNames.Images).path}
            element={<CreativeImageEffectsPage />}
          />
          <Route
            path={routes.get(RouteNames.Menus).path}
            element={<CreativeMenusPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
