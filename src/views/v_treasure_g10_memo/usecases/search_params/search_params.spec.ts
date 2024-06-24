import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { ETargetId, MTargetInfo } from "../../models/m_eorzea_g10_v2";
import * as index from "./search_params";

describe("function addTargetInfo", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  type Param = {
    dummyDate: string;
    id_treasure: ETargetId;
    searchParams: string;
    expected: string;
  };

  const cases: Param[] = [
    {
      dummyDate: "2024/06/24 12:12:12.111",
      id_treasure: "gh_t01",
      searchParams: "",
      expected: `treasure=${encodeURIComponent("lxsejbkf,gh_t01,")}`,
    },
    {
      dummyDate: "2024/06/24 11:11:11.111",
      id_treasure: "gh_t04",
      searchParams: `treasure=${encodeURIComponent("lxsejbkf,gh_t01,")}`,
      expected: [
        `treasure=${encodeURIComponent("lxsejbkf,gh_t01,")}`,
        `treasure=${encodeURIComponent("lxsccupz,gh_t04,")}`,
      ].join("&"),
    },
    {
      dummyDate: "2024/06/24 11:11:11.111",
      id_treasure: "gh_t04",
      searchParams: `treasure=${encodeURIComponent("lxsejbkf,gh_t01,イブマリー")}`,
      expected: [
        `treasure=${encodeURIComponent("lxsejbkf,gh_t01,イブマリー")}`,
        `treasure=${encodeURIComponent("lxsccupz,gh_t04,")}`,
      ].join("&"),
    },
  ];

  test.each(cases)(
    "test (%#)",
    ({ dummyDate, id_treasure, searchParams, expected }) => {
      vi.setSystemTime(new Date(dummyDate));

      const actual = index.addTargetInfo({
        id_treasure,
        searchParams: new URLSearchParams(searchParams),
      });
      expect(actual.toString()).toBe(expected);
    },
  );
});

describe("function removeTargetInfo", () => {
  type CaseParam = {
    id_target: string;
    query_strings: string;
    expected: string;
  };

  const cases: CaseParam[] = [
    {
      id_target: "lxt25qts",
      query_strings: [
        `treasure=${encodeURIComponent("lxt25qts,gh_t03,")}`,
      ].join("&"),
      expected: "",
    },
    {
      id_target: "lxt4g8qw",
      query_strings: [
        `treasure=${encodeURIComponent("lxt25qts,gh_t03,")}`,
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t03,")}`,
      ].join("&"),
      expected: [`treasure=${encodeURIComponent("lxt25qts,gh_t03,")}`].join(
        "&",
      ),
    },
    {
      id_target: "lxt4g8qw",
      query_strings: [
        `treasure=${encodeURIComponent("lxt25qts,gh_t03,")}`,
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t03,")}`,
        `treasure=${encodeURIComponent("lxt6qqo0,gh_t03,")}`,
      ].join("&"),
      expected: [
        `treasure=${encodeURIComponent("lxt25qts,gh_t03,")}`,
        `treasure=${encodeURIComponent("lxt6qqo0,gh_t03,")}`,
      ].join("&"),
    },
  ];

  test.each(cases)("test (%#)", ({ id_target, query_strings, expected }) => {
    const searchParams = new URLSearchParams(query_strings);
    const actual = index.removeTargetInfo({ id_target, searchParams });
    expect(actual.toString()).toBe(expected);
  });
});

describe("function parseTargetInfo", () => {
  type PropsCase = {
    text: string;
    expected: MTargetInfo | null;
  };

  const cases: PropsCase[] = [
    { text: "", expected: null },
    { text: "aaa,", expected: null },
    {
      text: "lxt25qts,gh_t02,",
      expected: {
        id_target: "lxt25qts",
        id_treasure: "gh_t02",
        name: "",
      },
    },
    {
      text: "lxt25qts,gh_t02,イブマリー",
      expected: {
        id_target: "lxt25qts",
        id_treasure: "gh_t02",
        name: "イブマリー",
      },
    },
  ];

  test.each(cases)("test (%#)", ({ text, expected }) => {
    const actual = index.parseTargetInfo(text);
    expect(actual).toStrictEqual(expected);
  });
});

describe("function loadAllTargetInfo", () => {
  type PropsCase = {
    query_strings: string;
    expected: MTargetInfo[];
  };

  const cases: PropsCase[] = [
    { query_strings: "", expected: [] },
    {
      query_strings: [
        `treasure=${encodeURIComponent("lxt25qts,gh_t02,")}`,
      ].join("&"),
      expected: [
        {
          id_target: "lxt25qts",
          id_treasure: "gh_t02",
          name: "",
        },
      ],
    },
    {
      query_strings: [
        `treasure=${encodeURIComponent("lxt25qts,gh_t02,")}`,
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t04,イブマリー")}`,
      ].join("&"),
      expected: [
        {
          id_target: "lxt25qts",
          id_treasure: "gh_t02",
          name: "",
        },
        {
          id_target: "lxt4g8qw",
          id_treasure: "gh_t04",
          name: "イブマリー",
        },
      ],
    },
    {
      query_strings: [
        `treasure=${encodeURIComponent("lxt25qts,gh_t02,")}`,
        "treasure=",
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t04,イブマリー")}`,
      ].join("&"),
      expected: [
        {
          id_target: "lxt25qts",
          id_treasure: "gh_t02",
          name: "",
        },
        {
          id_target: "lxt4g8qw",
          id_treasure: "gh_t04",
          name: "イブマリー",
        },
      ],
    },
  ];

  test.each(cases)("test (%#)", ({ query_strings, expected }) => {
    const actual = index.loadAllTargetInfo(new URLSearchParams(query_strings));
    expect(actual).toStrictEqual(expected);
  });
});

describe("function updateNameOfTargetInfo", () => {
  type PropsCase = {
    query_strings: string;
    id_target: string;
    name: string;
    expected: string;
  };

  const cases: PropsCase[] = [
    {
      query_strings: [
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t07,")}`,
      ].join("&"),
      id_target: "lxt4g8qw",
      name: "イブマリー",
      expected: [
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t07,イブマリー")}`,
      ].join("&"),
    },
    {
      query_strings: [
        `treasure=${encodeURIComponent("lxt6qqo0,gh_t06,")}`,
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t07,")}`,
      ].join("&"),
      id_target: "lxt4g8qw",
      name: "イブマリー",
      expected: [
        `treasure=${encodeURIComponent("lxt6qqo0,gh_t06,")}`,
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t07,イブマリー")}`,
      ].join("&"),
    },
    {
      query_strings: [
        `treasure=${encodeURIComponent("lxt6qqo0,gh_t06,")}`,
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t07,")}`,
        `treasure=${encodeURIComponent("lxtbbqi8,gs_t06,")}`,
      ].join("&"),
      id_target: "lxt4g8qw",
      name: "イブマリー",
      expected: [
        `treasure=${encodeURIComponent("lxt6qqo0,gh_t06,")}`,
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t07,イブマリー")}`,
        `treasure=${encodeURIComponent("lxtbbqi8,gs_t06,")}`,
      ].join("&"),
    },
    {
      query_strings: [
        `treasure=${encodeURIComponent("lxt6qqo0,gh_t06,")}`,
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t07,イヴ")}`,
        `treasure=${encodeURIComponent("lxtbbqi8,gs_t06,")}`,
      ].join("&"),
      id_target: "lxt4g8qw",
      name: "イブマリー",
      expected: [
        `treasure=${encodeURIComponent("lxt6qqo0,gh_t06,")}`,
        `treasure=${encodeURIComponent("lxt4g8qw,gh_t07,イブマリー")}`,
        `treasure=${encodeURIComponent("lxtbbqi8,gs_t06,")}`,
      ].join("&"),
    },
  ];

  test.each(cases)(
    "test (%#)",
    ({ id_target, name, query_strings, expected }) => {
      const actual = index.updateNameOfTargetInfo({
        id_target,
        name,
        searchParams: new URLSearchParams(query_strings),
      });
      expect(actual).toStrictEqual(new URLSearchParams(expected));
    },
  );
});
