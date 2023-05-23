// import { Layout, Dashboard, Overview, Reports } from '@dist/cjs';
// import { Layout, Dashboard, Overview, Reports } from '@dist/esm';
import { Layout, Dashboard, Overview, Reports } from '@package';
import React from 'react';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: 'dashboard',
    element: React.createElement(Layout),
    children: [
      {
        index: true,
        element: React.createElement(Dashboard),
      },
      {
        path: 'overview',
        element: React.createElement(Overview),
      },
      {
        path: 'reports',
        element: React.createElement(Reports),
      },
    ],
  },
];

export default routes;
