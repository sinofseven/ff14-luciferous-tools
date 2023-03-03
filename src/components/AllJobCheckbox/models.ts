import { ReactElement, Dispatch, SetStateAction } from "react";

export type ObjectAllJobFlags = {
  paladin: boolean;
  warrior: boolean;
  darkKnight: boolean;
  gunbreaker: boolean;
  whiteMage: boolean;
  scholar: boolean;
  astrologian: boolean;
  sage: boolean;
  monk: boolean;
  dragoon: boolean;
  ninja: boolean;
  samurai: boolean;
  reaper: boolean;
  bard: boolean;
  machinist: boolean;
  dancer: boolean;
  blackMage: boolean;
  summoner: boolean;
  redMage: boolean;
};

export type PropsAllJobFlags = {
  isShow: boolean;
  jobs: ObjectAllJobFlags;
  changeHandler: (jobs: ObjectAllJobFlags) => void;
  closeHandler: () => void;
};

export type HooksAllJobCheckboxes = {
  jobs: ObjectAllJobFlags;
  isShow: boolean;
  setJobs: Dispatch<SetStateAction<ObjectAllJobFlags>>;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  changeHandler: (jobs: ObjectAllJobFlags) => void;
  closeHandler: () => void;
  openHandler: () => void;
};

export type Stats = {
  value: number;
  max: number;
};

export type AllJobStats = {
  all: Stats;
  tank: Stats;
  healer: Stats;
  melee: Stats;
  ranged: Stats;
  caster: Stats;
};

export type ObjectAllJobCheckboxes = {
  paladin: ReactElement<HTMLInputElement>;
  warrior: ReactElement<HTMLInputElement>;
  darkKnight: ReactElement<HTMLInputElement>;
  gunbreaker: ReactElement<HTMLInputElement>;
  whiteMage: ReactElement<HTMLInputElement>;
  scholar: ReactElement<HTMLInputElement>;
  astrologian: ReactElement<HTMLInputElement>;
  sage: ReactElement<HTMLInputElement>;
  monk: ReactElement<HTMLInputElement>;
  dragoon: ReactElement<HTMLInputElement>;
  ninja: ReactElement<HTMLInputElement>;
  samurai: ReactElement<HTMLInputElement>;
  reaper: ReactElement<HTMLInputElement>;
  bard: ReactElement<HTMLInputElement>;
  machinist: ReactElement<HTMLInputElement>;
  dancer: ReactElement<HTMLInputElement>;
  blackMage: ReactElement<HTMLInputElement>;
  summoner: ReactElement<HTMLInputElement>;
  redMage: ReactElement<HTMLInputElement>;
};
