import { ObjectAllJobCheckboxes, AllJobStats } from "./models";
import classNames from "classnames";

type Props = {
  isShow: boolean;
  jobs: ObjectAllJobCheckboxes;
  stats: AllJobStats;
  closeHandler: () => void;
};

export function PresenterAllJobCheckbox({ isShow, jobs, stats, closeHandler }: Props): JSX.Element {
  return (
    <>
      <div className={classNames("modal", { "is-active": isShow })}>
        <div className="modal-background" onClick={closeHandler}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              全ジョブ ({stats.all.value} / {stats.all.max})
            </p>
          </header>
          <section className="modal-card-body">
            <div className="columns">
              <div className="column">
                <strong>
                  タンク ({stats.tank.value} / {stats.tank.max})
                </strong>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label>
                  {jobs.paladin}
                  ナイト
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.warrior}
                  戦士
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.darkKnight}
                  暗黒騎士
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.gunbreaker}
                  ガンブレイカー
                </label>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <strong>
                  ヒーラー ({stats.healer.value} / {stats.healer.max})
                </strong>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label>
                  {jobs.whiteMage}
                  白魔道士
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.scholar}
                  学者
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.astrologian}
                  占星術師
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.sage}
                  賢者
                </label>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <strong>
                  メレー ({stats.melee.value} / {stats.melee.max})
                </strong>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label>
                  {jobs.monk}
                  モンク
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.dragoon}
                  竜騎士
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.ninja}
                  忍者
                </label>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label>{jobs.samurai}侍</label>
              </div>
              <div className="column">
                <label>
                  {jobs.reaper}
                  リーパー
                </label>
              </div>
              <div className="column"></div>
            </div>
            <div className="columns">
              <div className="column">
                <strong>
                  レンジ ({stats.ranged.value} / {stats.ranged.max})
                </strong>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label>
                  {jobs.bard}
                  吟遊詩人
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.machinist}
                  機工士
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.dancer}
                  踊り子
                </label>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <strong>
                  キャスター ({stats.caster.value} / {stats.caster.max})
                </strong>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label>
                  {jobs.blackMage}
                  黒魔道士
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.summoner}
                  召喚士
                </label>
              </div>
              <div className="column">
                <label>
                  {jobs.redMage}
                  赤魔道士
                </label>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot all-job-checkbox">
            <button className="button" onClick={closeHandler}>
              閉じる
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
