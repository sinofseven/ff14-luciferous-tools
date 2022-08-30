import { calcIntervalSeconds } from "./index";
import EorzeaTime from "eorzea-time";

type Param = {
  et: EorzeaTime;
  nextHourEt: number;
  expected: number;
};

test.each([
  [
    {
      et: new EorzeaTime(new Date("2022/08/29 16:20:50+09:00")),
      nextHourEt: 14,
      expected: 0,
    },
  ],
  [
    {
      et: new EorzeaTime(new Date("2022/08/29 16:20:50+09:00")),
      nextHourEt: 16,
      expected: 350,
    },
  ],
  [
    {
      et: new EorzeaTime(new Date("2022/08/29 16:23:50+09:00")),
      nextHourEt: 14,
      expected: 4020,
    },
  ],
  [
    {
      et: new EorzeaTime(new Date("2022/08/29 16:23:50+09:00")),
      nextHourEt: 16,
      expected: 170,
    },
  ],
] as Array<[Param]>)("normal calcIntervalSeconds", (param) => {
  expect(calcIntervalSeconds(param.et, param.nextHourEt)).toEqual(param.expected);
});
