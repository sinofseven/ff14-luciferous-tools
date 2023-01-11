import { FC, MouseEvent } from "react";
import { Presenter } from "./presenver";
import { AllJobsCheckbox } from "./models";

export type { AllJobsCheckbox } from "./models";

export type PropsJobsModal = {
  jobs: AllJobsCheckbox;
  isShow: boolean;
  closeFunction: () => void;
};

const JobsModal: FC<PropsJobsModal> = ({ jobs, isShow, closeFunction }) => {
  const clickStopPropagation = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };
  return (
    <Presenter
      isShow={isShow}
      closeFunction={closeFunction}
      clickStopPropagation={clickStopPropagation}
      jobs={jobs}
    />
  );
};

export default JobsModal;
