import "bulma/css/bulma.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "@/App.tsx";
import { Routing } from "@/models/m_routing.ts";
import { routing } from "@/variables/routing";

function convertRouting(page: Routing): RouteObject {
  return {
    path: page.path,
    element: page.element,
    children:
      page.children == null ? undefined : page.children.map(convertRouting),
  };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routing.map(convertRouting),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
