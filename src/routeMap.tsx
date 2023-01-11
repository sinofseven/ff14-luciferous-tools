import EorzeaTime from "eorzea-time";
import { ReactElement } from "react";
import Home from "./pages/Home";
import LegendMaterials6_2 from "./pages/LegendMaterials6_2";
import MoonlightAethersand from "./pages/MoonlightAethersand";
import IslandPotionAndPowder from "./pages/IslandPotionAndPowder";
import MandervilleWeapons from "./pages/MandervilleWeapons";
import EquipmentMaterials6_3 from "./pages/EquipmentMaterials6_3";

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
  {
    name: "無人島: ポーションと火薬の必要材料数",
    path: "/island-potion-and-powder",
    element: (ss) => <IslandPotionAndPowder />,
  },
  {
    name: "マンダヴィルウェポン: 全ジョブ必要アイテム数",
    path: "/manderville-weapons-need-materials-for-all-jobs",
    element: (_) => <MandervilleWeapons />,
  },
  {
    name: "6.3 ギャザクラ新式装備素材",
    path: "/equipment-materials-6-3",
    element: (ss) => <EquipmentMaterials6_3 et={ss.et} />,
  },
];
