import { FC, ChangeEvent } from "react";

export type PropsCheckbox = {
  label: string;
  value: boolean;
  setValue: (v: boolean) => void;
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<PropsCheckbox> = ({ label, value, handler }) => {
  return (
    <>
      <label>
        <input type="checkbox" style={{ marginRight: "3px" }} checked={value} onChange={handler} />
        {label}
      </label>
    </>
  );
};

export default Checkbox;
