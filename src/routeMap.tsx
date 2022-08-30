import EorzeaTime from "eorzea-time";
import { ReactElement } from "react";
import Home from "./pages/Home";
import LegendMaterials6_2 from "./pages/LegendMaterials6_2";
import MoonlightAethersand from "./pages/MoonlightAethersand";

type SourceState = {
  et: EorzeaTime;
};

export type RouteNode = {
  name: string;
  path: string;
  element: (ss: SourceState) => ReactElement;
};

export const routingMap: RouteNode[] = [
  {
    name: "Home",
    path: "/",
    element: (ss) => <Home />,
  },
  {
    name: "6.2 伝説素材",
    path: "/legend-materials-6-2",
    element: (ss) => <LegendMaterials6_2 et={ss.et} />,
  },
  {
    name: "暁月の霊砂",
    path: "/moonlight-aethersand",
    element: (ss) => <MoonlightAethersand et={ss.et} />,
  },
];
