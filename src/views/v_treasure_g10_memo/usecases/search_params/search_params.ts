import {
  ALL_E_TARGET_ID,
  ETargetId,
  MTargetInfo,
} from "../../models/m_eorzea_g10_v2";

const SEARCH_KEY_TREASURES = "treasure" as const;
const SEARCH_KEY_POSITION = "position" as const;

export type PropsAddTreasure = {
  id_treasure: ETargetId;
  searchParams: URLSearchParams;
};
export function addTargetInfo({
  id_treasure,
  searchParams,
}: PropsAddTreasure): URLSearchParams {
  const id = new Date().getTime().toString(36);
  searchParams.append(SEARCH_KEY_TREASURES, `${id},${id_treasure},`);
  return searchParams;
}

export type PropsRemoveTreasure = {
  id_target: string;
  searchParams: URLSearchParams;
};
export function removeTargetInfo({
  id_target,
  searchParams,
}: PropsRemoveTreasure): URLSearchParams {
  const targets = searchParams.getAll(SEARCH_KEY_TREASURES);
  searchParams.delete(SEARCH_KEY_TREASURES);
  for (const line of targets) {
    const part = line.split(",");
    if (part[0] === id_target) {
      continue;
    }
    searchParams.append(SEARCH_KEY_TREASURES, line);
  }
  return searchParams;
}

export function parseTargetInfo(text: string): MTargetInfo | null {
  const part = text.split(",");
  if (part.length !== 3 || !ALL_E_TARGET_ID.includes(part[1])) {
    return null;
  }
  return {
    id_target: part[0],
    id_treasure: part[1],
    name: part[2],
  };
}

export function loadAllTargetInfo(
  searchParams: URLSearchParams,
): MTargetInfo[] {
  return searchParams
    .getAll(SEARCH_KEY_TREASURES)
    .map(parseTargetInfo)
    .filter((item) => item != null)
    .map((item) => item as MTargetInfo);
}

export type PropsUpdateNameOfTargetInfo = {
  id_target: string;
  name: string;
  searchParams: URLSearchParams;
};
export function updateNameOfTargetInfo({
  id_target,
  name,
  searchParams,
}: PropsUpdateNameOfTargetInfo): URLSearchParams {
  console.log(searchParams);
  const allTargetInfo = loadAllTargetInfo(searchParams);
  console.log(allTargetInfo);
  searchParams.delete(SEARCH_KEY_TREASURES);
  for (const info of allTargetInfo) {
    console.log(info);
    if (info.id_target === id_target) {
      info.name = name;
    }
    searchParams.append(
      SEARCH_KEY_TREASURES,
      `${info.id_target},${info.id_treasure},${info.name}`,
    );
  }

  return searchParams;
}

export function resetTargets(searchParams: URLSearchParams): URLSearchParams {
  searchParams.delete(SEARCH_KEY_TREASURES);
  return searchParams;
}

export function loadPosition(searchParams: URLSearchParams): string | null {
  return searchParams.get(SEARCH_KEY_POSITION);
}

export type PropsUpdatePosition = {
  id_target: string;
  searchParams: URLSearchParams;
};
export function updatePosition({
  id_target,
  searchParams,
}: PropsUpdatePosition): URLSearchParams {
  searchParams.set(SEARCH_KEY_POSITION, id_target);
  return searchParams;
}

export function resetPosition(searchParams: URLSearchParams): URLSearchParams {
  searchParams.delete(SEARCH_KEY_POSITION);
  return searchParams;
}
