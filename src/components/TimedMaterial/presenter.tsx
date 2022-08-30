import { FC } from "react";

type PresenterProps = {
  jobIcon: string;
  imageMap: string;
  nameMaterial: string;
  nameMap: string;
  nameAetheryte: string;
  timeLabel: string;
  isDanger: boolean;
  isInlineBlock: boolean;
};

const Presenter: FC<PresenterProps> = ({
  jobIcon,
  imageMap,
  nameMaterial,
  nameMap,
  nameAetheryte,
  timeLabel,
  isDanger,
  isInlineBlock,
}) => {
  const display = isInlineBlock ? "inline-block" : "block";
  let rootClass = "card";
  if (isDanger) {
    rootClass += " has-background-danger";
  }
  return (
    <div className={rootClass} style={{ width: "250px", margin: "1rem", display }}>
      <div className="card-header">
        <div className="card-header-icon">
          <span className="icon">
            <img alt="job icon" src={require(`../../assets/TimedMaterial/${jobIcon}`)} />
          </span>
        </div>
        <p className="card-header-title">{nameMaterial}</p>
      </div>
      <div className="card-image">
        <figure className="image">
          <img alt="map" src={require(`../../assets/${imageMap}`)} />
        </figure>
      </div>
      <div className="card-content" style={{ padding: "0.5rem" }}>
        <div className="content" style={{ textAlign: "start" }}>
          <ul style={{ marginTop: 0 }}>
            <li>{nameMap}</li>
            <li>{nameAetheryte}</li>
            <li>{timeLabel}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Presenter;
