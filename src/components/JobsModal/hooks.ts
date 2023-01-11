import { ChangeEvent, useState } from "react";
import { PropsCheckbox } from "../Checkbox";
import { AllJobsCheckbox } from "./models";

export const useAllJobCheckbox = (): AllJobsCheckbox => {
  const create = (label: string): PropsCheckbox => {
    const [value, setValue] = useState(false);
    const handler = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.checked);
    };
    return {
      label,
      value,
      setValue,
      handler,
    };
  };

  return {
    paladin: create("ナイト"),
    warrior: create("戦士"),
    darkKnight: create("暗黒騎士"),
    gunbreaker: create("ガンブレイカー"),
    whiteMage: create("白魔道士"),
    scholar: create("学者"),
    astrologian: create("占星術師"),
    sage: create("賢者"),
    monk: create("モンク"),
    dragoon: create("竜騎士"),
    ninja: create("忍者"),
    samurai: create("侍"),
    reaper: create("リーパー"),
    bard: create("吟遊詩人"),
    machinist: create("機工士"),
    dancer: create("踊り子"),
    blackMage: create("黒魔道士"),
    summoner: create("召喚士"),
    redMage: create("赤魔道士"),
  };
};
