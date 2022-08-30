import EorzeaTime from "eorzea-time";

const convertTo2Digit = (n: number): string => {
  return n.toString().padStart(2, "0");
};

export const calcIntervalSeconds = (et: EorzeaTime, nextHourEt: number): number => {
  const lineNow = [et.getHours(), et.getMinutes(), et.getSeconds()].map(convertTo2Digit).join("");
  const lineNext = [nextHourEt, 0, 0].map(convertTo2Digit).join("");
  const year = 2022;
  const month = 1;
  const dayNow = 1;
  const dayNext = lineNow <= lineNext ? 1 : 2;
  const dummyEtBefore = new Date(
    year,
    month,
    dayNow,
    et.getHours(),
    et.getMinutes(),
    et.getSeconds(),
  );
  const dummyEtAfter = new Date(year, month, dayNext, nextHourEt);
  const diffDummyEt = dummyEtAfter.getTime() - dummyEtBefore.getTime();
  return Math.floor((diffDummyEt * (70 / 1440)) / 1000);
};
