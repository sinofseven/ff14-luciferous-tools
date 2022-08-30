import { FC } from "react";
import Presenter from "./presenter";
import { Material } from "./model";
import EorzeaTime from "eorzea-time";
import { convertNumberToDigit2 } from "../../utils/Tools";

type TimedMaterialProps = {
  et: EorzeaTime;
  material: Material;
  isInlineBlock: boolean;
};

const createTimeLabel = (start: number, end: number): string => {
  const longStart = (start + 12) % 24;
  const longEnd = (end + 12) % 24;
  return [
    [start, end].map(convertNumberToDigit2).join("~") + "時",
    [longStart, longEnd].map(convertNumberToDigit2).join("~") + "時",
  ].join(", ");
};

const TimedMaterial: FC<TimedMaterialProps> = ({ et, material, isInlineBlock }) => {
  const hourEt = et.getHours() % 12;
  const isDanger = material.start <= hourEt && hourEt < material.end;
  const jobIcon = material.isMiner ? "Miner.png" : "Botanist.png";
  const timeLabel = createTimeLabel(material.start, material.end);
  return (
    <Presenter
      jobIcon={jobIcon}
      imageMap={material.image}
      nameMaterial={material.name}
      nameMap={material.map}
      nameAetheryte={material.aetheryte}
      timeLabel={timeLabel}
      isDanger={isDanger}
      isInlineBlock={isInlineBlock}
    />
  );
};

export type DataTimedMaterial = Material;
export default TimedMaterial;
