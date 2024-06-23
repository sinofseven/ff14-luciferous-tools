import { MTargetTreasure } from "../../models/m_eorzea_g10_v2";

export type PropsCTreasureCard = {
  target: MTargetTreasure;
  handlerClick: (target: MTargetTreasure) => void;
};

export function CTreasureCard({ target, handlerClick }: PropsCTreasureCard) {
  function click() {
    handlerClick(target);
  }

  return (
    <div
      className="card m-1"
      style={{ width: "192px", display: "inline-block" }}
    >
      <div className="card-image">
        <figure className="image">
          <img
            src={`/img/g10/treasures/${target.id}.avif`}
            alt={target.id}
            style={{ cursor: "pointer" }}
            onClick={click}
          />
        </figure>
      </div>
      <div className="card-content has-text-centered has-text-weight-bold pb-1 pt-1">
        <a onClick={click}>{target.name}</a>
      </div>
    </div>
  );
}
