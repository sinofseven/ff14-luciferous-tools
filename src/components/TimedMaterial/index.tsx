import { FC } from "react";
import Presenter from "./presenter";
import { Material } from "./model";
import EorzeaTime from "eorzea-time";
import { convertNumberToDigit2 } from "../../utils/Tools";
import { calcIntervalSeconds } from "../../utils/EorzeaTime";

type TimedMaterialProps = {
  et: EorzeaTime;
  material: Material;
  isInlineBlock: boolean;
};

const createTimeLabel = (material: Material): string => {
  let result =
    [material.rangeFirst.start, material.rangeFirst.end].map(convertNumberToDigit2).join("~") +
    "時";
  if (material.rangeSecond != null) {
    result +=
      ", " +
      [material.rangeSecond.start, material.rangeSecond.end].map(convertNumberToDigit2).join("~") +
      "時";
  }
  return result;
};
const createIntervalLabel = (material: Material, et: EorzeaTime): string => {
  const hourEt = et.getHours();
  const list = [material.rangeFirst.start, material.rangeFirst.end];
  if (material.rangeSecond != null) {
    list.push(material.rangeSecond.start, material.rangeSecond.end);
  }
  const hourTarget = list.find((h) => hourEt < h) ?? list[0];
  const intervalSeconds = calcIntervalSeconds(et, hourTarget);
  const minutes = Math.floor(intervalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const second = (intervalSeconds % 60).toString().padStart(2, "0");
  return `あと ${minutes}分${second}秒`;
};

const TimedMaterial: FC<TimedMaterialProps> = ({ et, material, isInlineBlock }) => {
  const hourEt = et.getHours();
  const isDanger =
    (material.rangeFirst.start <= hourEt && hourEt < material.rangeFirst.end) ||
    (material.rangeSecond != null &&
      material.rangeSecond.start <= hourEt &&
      hourEt < material.rangeSecond.end);
  const jobIcon = material.isMiner ? "Miner.png" : "Botanist.png";
  const timeLabel = createTimeLabel(material);
  const intervalLabel = createIntervalLabel(material, et);
  return (
    <Presenter
      jobIcon={jobIcon}
      imageMap={material.image}
      nameMaterial={material.name}
      nameMap={material.map}
      nameAetheryte={material.aetheryte}
      timeLabel={timeLabel}
      intervalLabel={intervalLabel}
      isDanger={isDanger}
      isInlineBlock={isInlineBlock}
    />
  );
};

export type DataTimedMaterial = Material;
export default TimedMaterial;
