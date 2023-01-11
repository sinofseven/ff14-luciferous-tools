import { PropsCheckbox } from "../Checkbox";

export type AllJobsCheckbox = {
  paladin: PropsCheckbox;
  warrior: PropsCheckbox;
  darkKnight: PropsCheckbox;
  gunbreaker: PropsCheckbox;
  whiteMage: PropsCheckbox;
  scholar: PropsCheckbox;
  astrologian: PropsCheckbox;
  sage: PropsCheckbox;
  monk: PropsCheckbox;
  dragoon: PropsCheckbox;
  ninja: PropsCheckbox;
  samurai: PropsCheckbox;
  reaper: PropsCheckbox;
  bard: PropsCheckbox;
  machinist: PropsCheckbox;
  dancer: PropsCheckbox;
  blackMage: PropsCheckbox;
  summoner: PropsCheckbox;
  redMage: PropsCheckbox;
};

export type ObjectAllJobsCheckbox = {
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

export const convertToObjectFromAllJobsCheckbox = (
  data: AllJobsCheckbox,
): ObjectAllJobsCheckbox => {
  return {
    paladin: data.paladin.value,
    warrior: data.warrior.value,
    darkKnight: data.darkKnight.value,
    gunbreaker: data.gunbreaker.value,
    whiteMage: data.whiteMage.value,
    scholar: data.scholar.value,
    astrologian: data.astrologian.value,
    sage: data.sage.value,
    monk: data.monk.value,
    dragoon: data.dragoon.value,
    ninja: data.ninja.value,
    samurai: data.samurai.value,
    reaper: data.reaper.value,
    bard: data.bard.value,
    machinist: data.machinist.value,
    dancer: data.dancer.value,
    blackMage: data.blackMage.value,
    summoner: data.summoner.value,
    redMage: data.redMage.value,
  };
};

export const loadFromObject = (data: AllJobsCheckbox, obj: ObjectAllJobsCheckbox): void => {
  const keys = Object.keys(data) as Array<keyof AllJobsCheckbox>;
  for (const key of keys) {
    const propsCheckbox = data[key];
    const value = obj[key];
    propsCheckbox.setValue(value);
  }
};
