import { FC } from "react";
import EorzeaTime from "eorzea-time";
import TimedMaterial, { DataTimedMaterial } from "../../components/TimedMaterial";
import { LegendMaterials } from "./data";
import BreadCrumb from "../../components/BreadCrumb";

type LegendMaterials6_2Props = {
  et: EorzeaTime;
};

const findCurrentMaterial = (et: EorzeaTime): DataTimedMaterial => {
  const hourEt = et.getHours() % 12;
  const material = LegendMaterials.find((item) => item.start <= hourEt && hourEt < item.end);
  return material ?? LegendMaterials[0];
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const LegendMaterials6_2: FC<LegendMaterials6_2Props> = ({ et }) => {
  const current = findCurrentMaterial(et);
  const cards = LegendMaterials.map((item) => {
    return <TimedMaterial et={et} material={item} isInlineBlock={true} key={item.name} />;
  });
  return (
    <>
      <BreadCrumb parts={"6.2 伝説素材"} />
      <div className="columns">
        <div className="column is-one-third">
          <div className="card" style={{ width: "250px", margin: "1rem" }}>
            <div className="card-header">
              <p className="card-header-title">今の素材</p>
            </div>
          </div>
          <TimedMaterial et={et} material={current} isInlineBlock={false} />
        </div>
        <div className="column">{cards}</div>
      </div>
    </>
  );
};

export default LegendMaterials6_2;
