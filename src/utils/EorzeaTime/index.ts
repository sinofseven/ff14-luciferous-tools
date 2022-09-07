import EorzeaTime from "eorzea-time";

export const calcIntervalSeconds = (et: EorzeaTime, nextHourEt: number): number => {
  const year = 2022;
  const month = 1;
  const day = 1;
  const dummyEtNow = new Date(year, month, day, et.getHours(), et.getMinutes(), et.getSeconds());
  let dummyEtAfter = new Date(year, month, day, nextHourEt, 0, 0);
  if (dummyEtAfter.getTime() < dummyEtNow.getTime()) {
    dummyEtAfter = new Date(year, month, day + 1, nextHourEt, 0, 0);
  }
  const diff = dummyEtAfter.getTime() - dummyEtNow.getTime();
  return Math.floor((diff * (70 / 1440)) / 1000);
};
