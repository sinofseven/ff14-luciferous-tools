import classNames from "classnames";
import { useState } from "react";

import { VCG10Editor } from "./child_views/vc_g10_editor";
import { VCG10Route } from "./child_views/vc_g10_route/vc_g10_route";

export function VTreasureG10Memo() {
  const [isEditor, setIsEditor] = useState(true);

  const page = isEditor ? <VCG10Editor /> : <VCG10Route />;

  return (
    <>
      <h1 className="title mt-5">宝の地図G10 メモツール</h1>
      <div className="tabs">
        <ul>
          <li className={classNames({ "is-active": isEditor })}>
            <a onClick={() => setIsEditor(true)}>入力</a>
          </li>
          <li className={classNames({ "is-active": !isEditor })}>
            <a onClick={() => setIsEditor(false)}>順路</a>
          </li>
        </ul>
      </div>
      {page}
    </>
  );
}
