import { JSX } from "react";

export type Page = {
  path: string;
  label: string;
  element: JSX.Element;
};

export type Routing = Page & {
  children?: Routing[];
};
