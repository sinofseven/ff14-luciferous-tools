import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, JSX } from "react";
import { useSearchParams } from "react-router-dom";

import { CTreasureCard } from "../../components/c_treasure_card";
import { EMapId, MTargetTreasure } from "../../models/m_eorzea_g10_v2";
import {
  addTargetInfo,
  loadAllTargetInfo,
  loadPosition,
  removeTargetInfo,
  resetPosition,
  updateNameOfTargetInfo,
  updatePosition,
} from "../../usecases/search_params";
import {
  ALL_MAPS,
  ALL_TARGET_TREASURES,
  MAPPING_AREA,
  MAPPING_TARGET_TREASURES,
} from "../../variables/var_eorzea_g10";

export function useMapTreasureCards(mapId: EMapId) {
  const [searchParams, setSearchParams] = useSearchParams();

  function addTargetId(target: MTargetTreasure) {
    const fixedSearchParams = addTargetInfo({
      id_treasure: target.id,
      searchParams,
    });
    setSearchParams(fixedSearchParams);
  }

  return ALL_TARGET_TREASURES.filter((item) => item.map_id === mapId).map(
    (item) => (
      <CTreasureCard key={item.id} target={item} handlerClick={addTargetId} />
    ),
  );
}

export function useTableRowTreasures() {
  const [searchParams, setSearchParams] = useSearchParams();
  const allTargetInfo = loadAllTargetInfo(searchParams);
  const position = loadPosition(searchParams);

  function unregister(id_target: string) {
    let fixedSearchParams = removeTargetInfo({ id_target, searchParams });
    if (id_target === position) {
      fixedSearchParams = resetPosition(searchParams);
    }
    setSearchParams(fixedSearchParams);
  }

  function updateUserName(e: ChangeEvent<HTMLInputElement>, id_target: string) {
    const fixedSearchParams = updateNameOfTargetInfo({
      id_target,
      name: e.target.value,
      searchParams,
    });
    setSearchParams(fixedSearchParams);
  }

  function updateCurrentPosition(id_target: string) {
    const fixedSearchParams = updatePosition({ id_target, searchParams });
    setSearchParams(fixedSearchParams);
  }

  const rows: JSX.Element[] = [];
  for (const map of ALL_MAPS) {
    const partialInfo = allTargetInfo.filter(
      (item) => MAPPING_TARGET_TREASURES[item.id_treasure]?.map_id === map.id,
    );
    if (partialInfo.length === 0) {
      continue;
    }
    rows.push(
      <tr key={map.id} className="has-background-warning-20">
        <th colSpan={4} className="has-text-white">
          {MAPPING_AREA[map.area_id]?.name} / {map.name}
        </th>
      </tr>,
    );

    const treasures = allTargetInfo
      .sort((a, b) => (a.id_treasure > b.id_treasure ? 1 : -1))
      .map((item) => (
        <tr key={item.id_target}>
          <td>
            <span
              className="icon"
              style={{ cursor: "pointer" }}
              onClick={() => unregister(item.id_target)}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </span>
          </td>
          <td>
            <div className="field">
              <div className="control has-text-centered">
                <label className="radio">
                  <input
                    type="radio"
                    name="current_position"
                    checked={position === item.id_target}
                    onChange={() => updateCurrentPosition(item.id_target)}
                  />
                </label>
              </div>
            </div>
          </td>
          <td>{MAPPING_TARGET_TREASURES[item.id_treasure]?.name}</td>
          <td>
            <div className="field">
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={item.name}
                  onChange={(e) => updateUserName(e, item.id_target)}
                />
              </div>
            </div>
          </td>
        </tr>
      ));
    rows.push(...treasures);
  }

  return rows;
}
