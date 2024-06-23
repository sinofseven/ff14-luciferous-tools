import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ALL_MAPS } from "../../variables/var_eorzea_g10";
import {
  SEARCH_KEY_CURRENT_POSITION,
  SEARCH_KEY_TREASURES,
} from "../../variables/var_search_params";
import { useMapTreasureCards, useTableRowTreasures } from "./hooks";

export function VCG10Editor() {
  const [currentMapId, setCurrentMapId] = useState(ALL_MAPS[0].id);
  const [searchParams, setSearchParams] = useSearchParams();

  const allRadioButtons = ALL_MAPS.map((item) => (
    <label key={item.id} className="radio">
      <input
        type="radio"
        name="currentMap"
        defaultChecked={item.id === currentMapId}
        onClick={() => setCurrentMapId(item.id)}
      />
      {item.name}
    </label>
  ));

  function resetAll() {
    searchParams.delete(SEARCH_KEY_TREASURES);
    searchParams.delete(SEARCH_KEY_CURRENT_POSITION);
    setSearchParams(searchParams);
  }

  function resetCurrentPosition() {
    searchParams.delete(SEARCH_KEY_CURRENT_POSITION);
    setSearchParams(searchParams);
  }

  const allMapTreasures = useMapTreasureCards(currentMapId);
  const allTableRows = useTableRowTreasures();

  return (
    <div className="columns">
      <div className="column">
        <div className="control">{allRadioButtons}</div>
        <hr />
        <div>{allMapTreasures}</div>
      </div>
      <div className="column">
        <div className="field is-grouped">
          <p className="control">
            <button className="button is-danger" onClick={resetAll}>
              リセット
            </button>
          </p>
          <p className="control">
            <button
              className="button is-warning"
              onClick={resetCurrentPosition}
            >
              現在地を削除
            </button>
          </p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>現在地</th>
              <th>地図</th>
            </tr>
          </thead>
          <tbody>{allTableRows}</tbody>
        </table>
      </div>
    </div>
  );
}
