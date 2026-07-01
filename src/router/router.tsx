/** @format */

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { default: MainLayout } = await import("@/layouts/MainLayout");

      return {
        Component: MainLayout,
      };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Home } = await import("../pages/Home/Home");

          return {
            Component: Home,
          };
        },
      },
    ],
  },
  {
    path: "*",
    lazy: async () => {
      const { default: NotFound } = await import("../pages/NotFound/NotFound");

      return {
        Component: NotFound,
      };
    },
  },
]);
