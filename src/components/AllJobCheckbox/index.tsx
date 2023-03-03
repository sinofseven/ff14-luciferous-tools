import { PresenterAllJobCheckbox } from "./presenter";
import { AllJobStats, ObjectAllJobCheckboxes, ObjectAllJobFlags, PropsAllJobFlags } from "./models";
import "./index.css";

export type { ObjectAllJobFlags, PropsAllJobFlags, HooksAllJobCheckboxes } from "./models";
export { useAllJobCheckboxes } from "./hooks";

export default function AllJobCheckbox({
  isShow,
  jobs,
  changeHandler,
  closeHandler,
}: PropsAllJobFlags): JSX.Element {
  const callback = (e: any): void => {
    const data: ObjectAllJobFlags = {
      paladin: checkboxes.paladin.props.checked,
      warrior: checkboxes.warrior.props.checked,
      darkKnight: checkboxes.darkKnight.props.checked,
      gunbreaker: checkboxes.gunbreaker.props.checked,
      whiteMage: checkboxes.whiteMage.props.checked,
      scholar: checkboxes.scholar.props.checked,
      astrologian: checkboxes.astrologian.props.checked,
      sage: checkboxes.sage.props.checked,
      monk: checkboxes.monk.props.checked,
      dragoon: checkboxes.dragoon.props.checked,
      ninja: checkboxes.ninja.props.checked,
      samurai: checkboxes.samurai.props.checked,
      reaper: checkboxes.reaper.props.checked,
      bard: checkboxes.bard.props.checked,
      machinist: checkboxes.machinist.props.checked,
      dancer: checkboxes.dancer.props.checked,
      blackMage: checkboxes.blackMage.props.checked,
      summoner: checkboxes.summoner.props.checked,
      redMage: checkboxes.redMage.props.checked,
    };
    const name = e.target.value as keyof ObjectAllJobFlags;
    data[name] = e.target.checked;
    changeHandler(data);
  };

  const checkboxes: ObjectAllJobCheckboxes = {
    paladin: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="paladin"
        checked={jobs.paladin}
        onChange={callback}
      />
    ),
    warrior: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="warrior"
        checked={jobs.warrior}
        onChange={callback}
      />
    ),
    darkKnight: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="darkKnight"
        checked={jobs.darkKnight}
        onChange={callback}
      />
    ),
    gunbreaker: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="gunbreaker"
        checked={jobs.gunbreaker}
        onChange={callback}
      />
    ),
    whiteMage: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="whiteMage"
        checked={jobs.whiteMage}
        onChange={callback}
      />
    ),
    scholar: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="scholar"
        checked={jobs.scholar}
        onChange={callback}
      />
    ),
    astrologian: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="astrologian"
        checked={jobs.astrologian}
        onChange={callback}
      />
    ),
    sage: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="sage"
        checked={jobs.sage}
        onChange={callback}
      />
    ),
    monk: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="monk"
        checked={jobs.monk}
        onChange={callback}
      />
    ),
    dragoon: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="dragoon"
        checked={jobs.dragoon}
        onChange={callback}
      />
    ),
    ninja: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="ninja"
        checked={jobs.ninja}
        onChange={callback}
      />
    ),
    samurai: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="samurai"
        checked={jobs.samurai}
        onChange={callback}
      />
    ),
    reaper: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="reaper"
        checked={jobs.reaper}
        onChange={callback}
      />
    ),
    bard: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="bard"
        checked={jobs.bard}
        onChange={callback}
      />
    ),
    machinist: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="machinist"
        checked={jobs.machinist}
        onChange={callback}
      />
    ),
    dancer: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="dancer"
        checked={jobs.dancer}
        onChange={callback}
      />
    ),
    blackMage: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="blackMage"
        checked={jobs.blackMage}
        onChange={callback}
      />
    ),
    summoner: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="summoner"
        checked={jobs.summoner}
        onChange={callback}
      />
    ),
    redMage: (
      <input
        type="checkbox"
        className="all-job-checkbox"
        value="redMage"
        checked={jobs.redMage}
        onChange={callback}
      />
    ),
  };

  const role = {
    tank: [jobs.paladin, jobs.warrior, jobs.darkKnight, jobs.gunbreaker],
    healer: [jobs.whiteMage, jobs.scholar, jobs.astrologian, jobs.sage],
    melee: [jobs.monk, jobs.dragoon, jobs.ninja, jobs.samurai, jobs.reaper],
    ranged: [jobs.bard, jobs.machinist, jobs.dancer],
    caster: [jobs.blackMage, jobs.summoner, jobs.redMage],
  };

  const allRole = Object.values(jobs);

  const stats: AllJobStats = {
    all: {
      value: allRole.filter((item) => item).length,
      max: allRole.length,
    },
    tank: {
      value: role.tank.filter((item) => item).length,
      max: role.tank.length,
    },
    healer: {
      value: role.healer.filter((item) => item).length,
      max: role.healer.length,
    },
    melee: {
      value: role.melee.filter((item) => item).length,
      max: role.melee.length,
    },
    ranged: {
      value: role.ranged.filter((item) => item).length,
      max: role.ranged.length,
    },
    caster: {
      value: role.caster.filter((item) => item).length,
      max: role.caster.length,
    },
  };

  return (
    <PresenterAllJobCheckbox
      isShow={isShow}
      jobs={checkboxes}
      closeHandler={closeHandler}
      stats={stats}
    />
  );
}
