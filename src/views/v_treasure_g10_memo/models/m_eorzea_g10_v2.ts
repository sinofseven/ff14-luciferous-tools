import { MPosition } from "@/models/m_common";

export const ALL_E_TARGET_ID: string[] = [
  "gh_e01",
  "gh_e02",
  "gh_t01",
  "gh_t02",
  "gh_t03",
  "gh_t04",
  "gh_t05",
  "gh_t06",
  "gh_t07",
  "gh_t08",
  "gs_e01",
  "gs_e02",
  "gs_t01",
  "gs_t02",
  "gs_t03",
  "gs_t04",
  "gs_t05",
  "gs_t06",
  "gs_t07",
  "gs_t08",
  "gk_e01",
  "gk_e02",
  "gk_t01",
  "gk_t02",
  "gk_t03",
  "gk_t04",
  "gk_t05",
  "gk_t06",
  "gk_t07",
  "gk_t08",
  "ek_e02",
  "ek_e03",
  "ek_t01",
  "ek_t02",
  "ek_t03",
  "ek_t04",
  "ek_t05",
  "ek_t06",
  "ek_t07",
  "ek_t08",
  "ea_e01",
  "ea_e02",
  "ea_e03",
  "ea_t01",
  "ea_t02",
  "ea_t03",
  "ea_t04",
  "ea_t05",
  "ea_t06",
  "ea_t07",
  "ea_t08",
  "ey_e01",
  "ey_e02",
  "ey_t01",
  "ey_t02",
  "ey_t03",
  "ey_t04",
  "ey_t05",
  "ey_t06",
  "ey_t07",
  "ey_t08",
] as const;

export type ETargetId = (typeof ALL_E_TARGET_ID)[number];

export type ECategoryId = "e" | "t";
export type ECategoryName = "エーテライト" | "地図";

export type EAreaId = "g" | "e";
export type EAreaName = "ギラバニア" | "ひんがし";

export type EMapId = "gh" | "gs" | "gk" | "ek" | "ea" | "ey";

export type MCategory = {
  id: ECategoryId;
  name: ECategoryName;
};

export type MArea = {
  id: EAreaId;
  name: EAreaName;
  maps: EMapId[];
};

export type MMap = {
  id: EMapId;
  name: string;
  area_id: EAreaId;
  treasures: ETargetId[];
};

export type MDirection = {
  nearest_aetheryte_id: ETargetId;
  nearest_aetheryte_dir: number;
  t01: number;
  t02: number;
  t03: number;
  t04: number;
  t05: number;
  t06: number;
  t07: number;
  t08: number;
};

export type MTargetBase = {
  id: ETargetId;
  name: string;
  category_id: ECategoryId;
  area_id: EAreaId;
  map_id: EMapId;
  position: MPosition;
};

export type MTargetAetheryte = MTargetBase & {
  near_treasures: ETargetId[];
};

export type MTargetTreasure = MTargetBase & {
  direction: MDirection;
};

export function isTargetMAetheryte(
  value: MTargetBase,
): value is MTargetAetheryte {
  return value.category_id === "e";
}

export function isTargetMTreasure(
  value: MTargetBase,
): value is MTargetTreasure {
  return value.category_id === "t";
}

export type MTargetInfo = {
  id_target: string;
  id_treasure: ETargetId;
  name: string;
};

export type MRouteTreasure = {
  target_id: ETargetId;
  from_aetheryte: boolean;
};
