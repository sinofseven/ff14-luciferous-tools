export type HourRange = {
  start: number;
  end: number;
};

export type Material = {
  name: string;
  acquire?: string; // 精選先
  image: string;
  map: string;
  aetheryte: string;
  isMiner: boolean;
  rangeFirst: HourRange;
  rangeSecond?: HourRange;
};
