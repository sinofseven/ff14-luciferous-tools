import {
  EAreaId,
  EMapId,
  ETargetId,
  MRouteTreasure,
} from "../../models/m_eorzea_g10_v2";
import {
  ALL_AREA,
  MAPPING_AREA,
  MAPPING_TARGET_TREASURES,
} from "../../variables/var_eorzea_g10";

type RouteTreasureWithDirection = MRouteTreasure & {
  direction: number;
};

function resolveAreaOrder(currentPosition: ETargetId | null): EAreaId[] {
  const all_id_area = ALL_AREA.map((item) => item.id);
  if (currentPosition == null) {
    return ALL_AREA.map((item) => item.id);
  }
  const target = MAPPING_TARGET_TREASURES[currentPosition];
  const currentAreaId = target.area_id;

  return all_id_area.sort((a) => (a === currentAreaId ? -1 : 1));
}

function resolveMapOrder(
  allIdTarget: ETargetId[],
  currentPosition: ETargetId | null,
  orderArea: EAreaId[],
): EMapId[] {
  const currentMapId: EMapId | undefined =
    MAPPING_TARGET_TREASURES[currentPosition!]?.map_id;

  const unionTargetMapId = new Set(
    allIdTarget.map((item) => MAPPING_TARGET_TREASURES[item].map_id),
  );

  const result: EMapId[] = [];
  for (const id_area of orderArea) {
    const area = MAPPING_AREA[id_area];
    const cMaps = area.maps.filter((item) => item === currentMapId);
    const oMaps = area.maps.filter((item) => item !== currentMapId);
    result.push(...cMaps, ...oMaps);
  }

  return result.filter((item) => unionTargetMapId.has(item));
}

type PropsResolveMapRoute = {
  idMap: EMapId;
  idCurrentPosition: ETargetId | null;
  listIdTreasures: ETargetId[];
};

function resolveMapRoute({
  idMap,
  idCurrentPosition,
  listIdTreasures,
}: PropsResolveMapRoute): MRouteTreasure[] {
  const mapping_count: { [key: string]: number } = {};
  for (const id_treasure of listIdTreasures) {
    if (MAPPING_TARGET_TREASURES[id_treasure].map_id !== idMap) {
      continue;
    }
    const count = mapping_count[id_treasure] ?? 0;
    mapping_count[id_treasure] = count + 1;
  }

  let currentId = idCurrentPosition;
}
