import { Page, Routing } from "@/models/m_routing.ts";
import { VAbout } from "@/views/v_about";
import { VHome } from "@/views/v_home";
import { VTreasureG10Memo } from "@/views/v_treasure_g10_memo";
import { VCG10Editor } from "@/views/v_treasure_g10_memo/child_views/vc_g10_editor";
import { VCG10Route } from "@/views/v_treasure_g10_memo/child_views/vc_g10_route";

export type MappingPages = {
  home: Page;
  about: Page;
  treasureG10Memo: Page;
  childG10Editor: Page;
  childG10Route: Page;
  childG10Default: Page;
};

export const PAGES: MappingPages = {
  home: {
    path: "",
    label: "Home",
    element: <VHome />,
  },
  about: {
    path: "about",
    label: "About",
    element: <VAbout />,
  },
  treasureG10Memo: {
    path: "treasure-g10-memo",
    label: "地図G10メモツール",
    element: <VTreasureG10Memo />,
  },
  childG10Editor: {
    path: "editor",
    label: "G10メモツール - エディター",
    element: <VCG10Editor />,
  },
  childG10Route: {
    path: "route",
    label: "G10メモツール - Editor",
    element: <VCG10Route />,
  },
  childG10Default: {
    path: "",
    label: "G10メモツール - エディター",
    element: <VCG10Editor />,
  },
};

export const routing: Routing[] = [PAGES.home, PAGES.treasureG10Memo];
