import { useState } from "react";
import { HooksAllJobCheckboxes, ObjectAllJobFlags } from "./models";

export function useAllJobCheckboxes(): HooksAllJobCheckboxes {
  const [jobs, setJobs] = useState<ObjectAllJobFlags>({
    astrologian: false,
    bard: false,
    blackMage: false,
    dancer: false,
    darkKnight: false,
    dragoon: false,
    gunbreaker: false,
    machinist: false,
    monk: false,
    ninja: false,
    paladin: false,
    reaper: false,
    redMage: false,
    sage: false,
    samurai: false,
    scholar: false,
    summoner: false,
    warrior: false,
    whiteMage: false,
  });
  const [isShow, setIsShow] = useState<boolean>(false);
  return {
    jobs,
    setJobs,
    isShow,
    setIsShow,
    changeHandler(changedJobs) {
      setJobs(changedJobs);
    },
    closeHandler() {
      setIsShow(false);
    },
    openHandler() {
      setIsShow(true);
    },
  };
}
