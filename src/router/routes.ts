export enum RouteNames {
  Buttons = 'buttons',
  Images = 'images',
  Sandbox = 'sandbox',
  Menus = 'menus',
  Cards = 'cards',
}

interface RouteAttributes {
  name: RouteNames;
  label: string;
  path: string;
}

const _routes: RouteAttributes[] = [
  {
    name: RouteNames.Buttons,
    label: 'Creative Buttons',
    path: '/creative-buttons',
  },
  {
    name: RouteNames.Images,
    label: 'Creative Images',
    path: '/creative-images',
  },
  {
    name: RouteNames.Menus,
    label: 'Creative Menus',
    path: '/creative-menus',
  },
  {
    name: RouteNames.Cards,
    label: 'Creative Cards',
    path: '/creative-cards',
  },
  {
    name: RouteNames.Sandbox,
    label: 'Sandbox',
    path: '/sandbox',
  },
];

class Routes {
  private routes = _routes;

  get(routeName: RouteNames): RouteAttributes {
    const route = this.routes.find(({ name }) => name === routeName);
    if (!route)
      throw new Error(
        'Routes.prototype.get() could not be able to get route attributes',
      );

    return route;
  }

  getAll(): RouteAttributes[] {
    return this.routes.slice();
  }

  find(routePath: string): RouteAttributes | undefined {
    const route = this.routes.find(({ path }) => path === routePath);
    return route;
  }

  findNext(routePath: string): RouteAttributes | undefined {
    const routeIndex = this.routes.findIndex(({ path }) => path === routePath);
    if (routeIndex === -1) return undefined;

    const nextIndex = (routeIndex + 1) % this.routes.length;
    const nextRoute = this.routes.at(nextIndex);
    return nextRoute;
  }

  findPrevious(routePath: string): RouteAttributes | undefined {
    const routeIndex = this.routes.findIndex(({ path }) => path === routePath);
    if (routeIndex === -1) return undefined;

    const previousIndex = routeIndex - 1;
    const previousRoute = this.routes.at(previousIndex);
    return previousRoute;
  }
}

export const routes = new Routes();
