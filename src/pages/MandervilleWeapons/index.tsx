import { FC, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import JobsModal from "../../components/JobsModal";
import { useAllJobCheckbox } from "../../components/JobsModal/hooks";

const MandervilleWeapons: FC = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const closeFunction = (): void => {
    setIsModalShow(false);
  };
  const open = (): void => {
    setIsModalShow(true);
  };
  const tmp = (): void => {
    console.log(jobs);
  };
  const jobs = useAllJobCheckbox();
  return (
    <>
      <JobsModal jobs={jobs} isShow={isModalShow} closeFunction={closeFunction} />
      <BreadCrumb parts={"マンダヴィルウェポン: 全ジョブ必要アイテム数"} />
      <p>{isModalShow ? "true" : "false"}</p>
      <p>
        <button onClick={open}>open</button>
      </p>
      <p>
        <button onClick={tmp}>tmp</button>
      </p>
    </>
  );
};

export default MandervilleWeapons;
