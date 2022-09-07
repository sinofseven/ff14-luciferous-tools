import { FC, useState, ChangeEvent, ChangeEventHandler, ReactElement } from "react";
import { Material, Information } from "./data";

type TableRowProps = {
  material: Material;
  isInput: boolean;
};

const TableRow: FC<TableRowProps> = ({ material, isInput }) => {
  const [count, setCount] = useState(0);
  const changeHandler: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setCount(Number(event.target.value));

  let inputCell: ReactElement | null = (
    <td>
      <input type="number" value={count} onChange={changeHandler} />
    </td>
  );
  let created = count / material.amount;
  let cycle = created / (Information.itemsPerCycle / Information.kinds);
  let cycleFactories = cycle / Information.factories;
  let series = cycleFactories / Information.cyclesPerSeries;

  if (!isInput) {
    created = material.amount;
    cycle = created * (Information.itemsPerCycle / Information.kinds);
    cycleFactories = cycle * Information.factories;
    series = cycleFactories * Information.cyclesPerSeries;
    inputCell = null;
  }
  return (
    <tr>
      <th>{material.name}</th>
      <td className="has-text-right">{material.amount}</td>
      {inputCell}
      <td className="has-text-right">{created.toFixed(1)}</td>
      <td className="has-text-right">{cycle.toFixed(1)}</td>
      <td className="has-text-right">{cycleFactories.toFixed(1)}</td>
      <td className="has-text-right">{series.toFixed(1)}</td>
    </tr>
  );
};

export default TableRow;
