import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JSX } from "react";
import { useSearchParams } from "react-router-dom";

import { CTreasureCard } from "../../components/c_treasure_card";
import {
  EMapId,
  ETargetId,
  MTargetTreasure,
} from "../../models/m_eorzea_g10_v2";
import {
  ALL_MAPS,
  ALL_TARGET_TREASURES,
  MAPPING_AREA,
  MAPPING_TARGET_TREASURES,
} from "../../variables/var_eorzea_g10";
import {
  SEARCH_KEY_CURRENT_POSITION,
  SEARCH_KEY_TREASURES,
} from "../../variables/var_search_params";

export function useMapTreasureCards(mapId: EMapId) {
  const [searchParams, setSearchParams] = useSearchParams();

  function addTargetId(target: MTargetTreasure) {
    const treasures = searchParams.getAll(SEARCH_KEY_TREASURES);
    treasures.push(target.id);

    treasures.sort().forEach((id, index) => {
      if (index === 0) {
        searchParams.set(SEARCH_KEY_TREASURES, id);
      } else {
        searchParams.append(SEARCH_KEY_TREASURES, id);
      }
      setSearchParams(searchParams);
    });
  }

  return ALL_TARGET_TREASURES.filter((item) => item.map_id === mapId).map(
    (item) => (
      <CTreasureCard key={item.id} target={item} handlerClick={addTargetId} />
    ),
  );
}

export function useTableRowTreasures() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPosition = searchParams.get(SEARCH_KEY_CURRENT_POSITION);

  const counting_treasure_id: { [key: string]: number } = {};
  for (const treasure_id of searchParams.getAll(SEARCH_KEY_TREASURES)) {
    const count = counting_treasure_id[treasure_id] ?? 0;
    counting_treasure_id[treasure_id] = count + 1;
  }

  function unregister(id_treasure: ETargetId) {
    const list: ETargetId[] = [];
    for (const [rawKey, rawCount] of Object.entries(counting_treasure_id)) {
      const delta = rawKey === id_treasure ? 1 : 0;
      const count = rawCount - delta;
      for (let i = 0; i < count; i++) {
        list.push(rawKey as ETargetId);
      }
    }

    searchParams.delete(SEARCH_KEY_TREASURES);
    list.forEach((id_treasure, index) => {
      if (index === 0) {
        searchParams.set(SEARCH_KEY_TREASURES, id_treasure);
      } else {
        searchParams.append(SEARCH_KEY_TREASURES, id_treasure);
      }
    });
    setSearchParams(searchParams);
  }

  function updateCurrentPosition(id_treasure: ETargetId) {
    searchParams.set(SEARCH_KEY_CURRENT_POSITION, id_treasure);
    setSearchParams(searchParams);
  }

  const result: JSX.Element[] = [];
  for (const map of ALL_MAPS) {
    let isFirst = true;
    for (const id_treasure of map.treasures) {
      const count: number | undefined = counting_treasure_id[id_treasure];
      if (count == null) {
        continue;
      }
      if (isFirst) {
        isFirst = false;
        result.push(
          <tr key={map.id} className="has-background-warning-20">
            <th colSpan={3} className="has-text-white">
              {MAPPING_AREA[map.area_id].name} - {map.name}
            </th>
          </tr>,
        );
      }

      for (let i = 0; i < count; i++) {
        result.push(
          <tr key={`${id_treasure}-${i}`}>
            <td>
              <span
                className="icon"
                onClick={() => unregister(id_treasure)}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </span>
            </td>
            <td>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="current_position"
                    checked={id_treasure === currentPosition}
                    onChange={() => updateCurrentPosition(id_treasure)}
                  />
                </label>
              </div>
            </td>
            <td>{MAPPING_TARGET_TREASURES[id_treasure].name}</td>
          </tr>,
        );
      }
    }
  }

  return result;
}
