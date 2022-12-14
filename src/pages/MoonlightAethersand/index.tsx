import { FC } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import TimedMaterial from "../../components/TimedMaterial";
import EorzeaTime from "eorzea-time";
import { TargetMaterials } from "./data";

type MoonlightAethersandProps = {
  et: EorzeaTime;
};

const MoonlightAethersand: FC<MoonlightAethersandProps> = ({ et }) => {
  const hourEt = et.getHours();
  const currentMaterial = TargetMaterials.find(
    (item) =>
      (item.rangeFirst.start <= hourEt && hourEt < item.rangeFirst.end) ||
      (item.rangeSecond != null &&
        item.rangeSecond.start <= hourEt &&
        hourEt < item.rangeSecond.end),
  );
  const currentCard =
    currentMaterial == null ? null : (
      <TimedMaterial et={et} material={currentMaterial} isInlineBlock={false} />
    );
  const arrayCards = TargetMaterials.map((item) => {
    return <TimedMaterial et={et} material={item} isInlineBlock={true} key={item.name} />;
  });
  return (
    <>
      <BreadCrumb parts={"暁月の霊砂"} />
      <div className="columns">
        <div className="column is-one-third">
          <div className="card" style={{ width: "250px", margin: "1rem" }}>
            <div className="card-header">
              <p className="card-header-title">今の素材</p>
            </div>
          </div>
          {currentCard}
        </div>
        <div className="column">{arrayCards}</div>
      </div>
    </>
  );
};

export default MoonlightAethersand;
