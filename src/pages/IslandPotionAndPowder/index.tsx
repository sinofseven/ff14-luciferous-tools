import { FC } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Materials } from "./data";
import TableRow from "./TableRow";

const IslandPotionAndPowder: FC = () => {
  return (
    <>
      <BreadCrumb parts={"無人島: ポーションと火薬の必要材料数"} />
      <div className="card" style={{ marginBottom: "1rem" }}>
        <div className="card-header">
          <p className="card-header-title">必要数</p>
        </div>
        <div className="card-content">
          <div className="content">
            <table className="table is-bordered">
              <thead>
                <th>名前</th>
                <th>必要数</th>
                <th>作成可能数</th>
                <th>サイクル数</th>
                <th>サイクル数 * 3</th>
                <th>1期</th>
              </thead>
              <tbody>
                {Materials.map((item) => (
                  <TableRow material={item} key={item.name} isInput={false} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">カルキュレータ</p>
        </div>
        <div className="card-content">
          <div className="content">
            <table className="table is-bordered">
              <thead>
                <th>名前</th>
                <th>必要数</th>
                <th>所持数</th>
                <th>作成可能数</th>
                <th>サイクル数</th>
                <th>サイクル数 / 3</th>
                <th>何期</th>
              </thead>
              <tbody>
                {Materials.map((item) => (
                  <TableRow material={item} key={item.name} isInput={true} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default IslandPotionAndPowder;
