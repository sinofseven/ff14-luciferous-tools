export type Material = {
  name: string;
  amount: number;
};

export type InformationData = {
  kinds: number;
  factories: number;
  itemsPerCycle: number;
  cyclesPerSeries: number;
};

export const Materials: Material[] = [
  {
    name: "パームリーフ",
    amount: 2,
  },
  {
    name: "草葉",
    amount: 3,
  },
  {
    name: "砂",
    amount: 2,
  },
  {
    name: "石灰岩",
    amount: 1,
  },
];

export const Information: InformationData = {
  kinds: 2,
  factories: 3,
  itemsPerCycle: 6,
  cyclesPerSeries: 5,
};
