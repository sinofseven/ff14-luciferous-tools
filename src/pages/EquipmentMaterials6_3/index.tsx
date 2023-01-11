import { FC } from "react";
import EorzeaTime from "eorzea-time";
import TimedMaterial from "../../components/TimedMaterial";
import { LegendMaterials } from "./data";
import BreadCrumb from "../../components/BreadCrumb";

type LegendMaterials6_2Props = {
  et: EorzeaTime;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const EquipmentMaterials6_3: FC<LegendMaterials6_2Props> = ({ et }) => {
  const cards = LegendMaterials.map((item) => {
    return <TimedMaterial et={et} material={item} isInlineBlock={true} key={item.name} />;
  });
  return (
    <>
      <BreadCrumb parts={"6.3 ギャザクラ新式装備素材"} />
      <div className="columns">
        <div className="column" style={{ maxWidth: "1100px" }}>
          {cards}
        </div>
      </div>
    </>
  );
};

export default EquipmentMaterials6_3;
