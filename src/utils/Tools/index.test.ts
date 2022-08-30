import { convertNumberToDigit2 } from "./index";

type Param = {
  n: number;
  expected: string;
};

test.each([[{ n: 1, expected: "01" }], [{ n: 22, expected: "22" }]] as Array<[Param]>)(
  "convertNumberToDigit2 normal",
  (param) => {
    const actual = convertNumberToDigit2(param.n);
    expect(actual).toEqual(param.expected);
  },
);
