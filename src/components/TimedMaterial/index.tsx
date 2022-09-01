import { FC } from "react";
import Presenter from "./presenter";
import { Material } from "./model";
import EorzeaTime from "eorzea-time";
import { convertNumberToDigit2 } from "../../utils/Tools";

type TimedMaterialProps = {
  et: EorzeaTime;
  material: Material;
  isInlineBlock: boolean;
  isHalf: boolean;
};

const TimedMaterial: FC<TimedMaterialProps> = ({ et, material, isInlineBlock, isHalf }) => {
  let hourEt = et.getHours();
  if (isHalf) {
    hourEt = hourEt % 12;
  }
  const isDanger = material.start <= hourEt && hourEt < material.end;
  const jobIcon = material.isMiner ? "Miner.png" : "Botanist.png";
  const timeLabel = [material.start, material.end].map(convertNumberToDigit2).join("~") + "時";
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
