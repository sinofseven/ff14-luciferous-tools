import { FC, MouseEvent } from "react";
import classNames from "classnames";
import { AllJobsCheckbox } from "./models";
import Checkbox, { PropsCheckbox } from "../Checkbox";

type Props = {
  isShow: boolean;
  closeFunction: () => void;
  clickStopPropagation: (e: MouseEvent<HTMLDivElement>) => void;
  jobs: AllJobsCheckbox;
};

type LayoutJobs = {
  category?: string;
  jobs: Array<PropsCheckbox | null>;
  countMax?: number;
  countCompleted?: number;
};

const DoubleRow: FC<LayoutJobs> = ({ category, jobs, countMax, countCompleted }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const count = countMax != null && countCompleted != null ? <span></span> : null;
  return (
    <>
      {category == null ? null : (
        <div className="columns">
          <div className="column">
            <strong>{category}</strong>
          </div>
        </div>
      )}
      <div className="columns">
        {jobs.map((j, i) => {
          return (
            <div className="column" key={i}>
              {j == null ? null : (
                <Checkbox
                  label={j.label}
                  value={j.value}
                  setValue={j.setValue}
                  handler={j.handler}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Presenter: FC<Props> = ({ isShow, closeFunction, clickStopPropagation, jobs }) => {
  const layouts: LayoutJobs[] = [
    {
      category: "タンク",
      jobs: [jobs.paladin, jobs.warrior, jobs.darkKnight, jobs.gunbreaker],
      countMax: 4,
      countCompleted: [jobs.paladin, jobs.warrior, jobs.darkKnight, jobs.gunbreaker].filter(
        (v) => v.value,
      ).length,
    },
    {
      category: "ヒーラー",
      jobs: [jobs.whiteMage, jobs.scholar, jobs.astrologian, jobs.sage],
      countMax: 4,
      countCompleted: [jobs.whiteMage, jobs.scholar, jobs.astrologian, jobs.sage].filter(
        (v) => v.value,
      ).length,
    },
    {
      category: "メレー",
      jobs: [jobs.monk, jobs.dragoon, jobs.ninja],
      countMax: 5,
      countCompleted: [jobs.monk, jobs.dragoon, jobs.ninja, jobs.samurai, jobs.reaper].filter(
        (v) => v.value,
      ).length,
    },
    {
      jobs: [jobs.samurai, jobs.reaper, null],
    },
    {
      category: "レンジ",
      jobs: [jobs.bard, jobs.machinist, jobs.dancer],
      countMax: 3,
      countCompleted: [jobs.bard, jobs.machinist, jobs.dancer].filter((v) => v.value).length,
    },
    {
      category: "キャスター",
      jobs: [jobs.blackMage, jobs.summoner, jobs.redMage],
      countMax: 3,
      countCompleted: [jobs.blackMage, jobs.summoner, jobs.redMage].filter((v) => v.value).length,
    },
  ];
  return (
    <div className={classNames("modal", { "is-active": isShow })} onClick={closeFunction}>
      <div className="modal-background"></div>
      <div className="modal-card" onClick={clickStopPropagation}>
        <header className="modal-card-head">
          <p className="modal-card-title">Jobs</p>
        </header>
        <section className="modal-card-body">
          {layouts.map((item, i) => (
            <DoubleRow jobs={item.jobs} category={item.category} key={i} />
          ))}
        </section>
        <footer className="modal-card-foot is-justify-content-end">
          <button className="button" onClick={closeFunction}>
            閉じる
          </button>
        </footer>
      </div>
    </div>
  );
};
