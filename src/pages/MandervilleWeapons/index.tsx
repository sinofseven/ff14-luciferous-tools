import BreadCrumb from "../../components/BreadCrumb";
import AllJobCheckbox, {
  ObjectAllJobFlags,
  useAllJobCheckboxes,
} from "../../components/AllJobCheckbox";
import { useEffect } from "react";

import "./index.css";

const KEY_STORAGE = "manderville-weapons";
type StorageData = {
  step1st: ObjectAllJobFlags;
  step2nd: ObjectAllJobFlags;
};

type Progress = {
  step1st: number;
  step2nd: number;
};

const jobNames = [
  "paladin",
  "warrior",
  "darkKnight",
  "gunbreaker",
  "whiteMage",
  "scholar",
  "astrologian",
  "sage",
  "monk",
  "dragoon",
  "ninja",
  "samurai",
  "reaper",
  "bard",
  "machinist",
  "dancer",
  "blackMage",
  "summoner",
  "redMage",
];

const checkObjectAllJobFlags = (data: object): boolean => {
  const keys = Object.keys(data);
  if (keys.length !== jobNames.length) return false;
  const invalidNames = keys.filter((item) => {
    return !jobNames.includes(item);
  });
  if (invalidNames.length > 0) return false;
  for (const v of Object.values(data)) {
    if (Object.prototype.toString.call(v) !== "[object Boolean]") {
      return false;
    }
  }
  return true;
};

export default function MandervilleWeapons(): JSX.Element {
  const step1st = useAllJobCheckboxes();
  const step2nd = useAllJobCheckboxes();
  const progress: Progress = {
    step1st: Object.values(step1st.jobs).filter((item) => item).length,
    step2nd: Object.values(step2nd.jobs).filter((item) => item).length,
  };

  const clear = (): void => {
    const data: StorageData = {
      step1st: {
        astrologian: false,
        bard: false,
        blackMage: false,
        dancer: false,
        darkKnight: false,
        dragoon: false,
        gunbreaker: false,
        machinist: false,
        monk: false,
        ninja: false,
        paladin: false,
        reaper: false,
        redMage: false,
        sage: false,
        samurai: false,
        scholar: false,
        summoner: false,
        warrior: false,
        whiteMage: false,
      },
      step2nd: {
        astrologian: false,
        bard: false,
        blackMage: false,
        dancer: false,
        darkKnight: false,
        dragoon: false,
        gunbreaker: false,
        machinist: false,
        monk: false,
        ninja: false,
        paladin: false,
        reaper: false,
        redMage: false,
        sage: false,
        samurai: false,
        scholar: false,
        summoner: false,
        warrior: false,
        whiteMage: false,
      },
    };
    const raw = JSON.stringify(data);

    step1st.changeHandler(data.step1st);
    window.localStorage.setItem(KEY_STORAGE, raw);
  };
  const updateStep1st = (updatedJobs: ObjectAllJobFlags): void => {
    step1st.changeHandler(updatedJobs);
    const data: StorageData = {
      step1st: updatedJobs,
      step2nd: step2nd.jobs,
    };
    const raw = JSON.stringify(data);
    window.localStorage.setItem(KEY_STORAGE, raw);
  };

  const updateStep2nd = (updatedJobs: ObjectAllJobFlags): void => {
    step2nd.changeHandler(updatedJobs);
    const data: StorageData = {
      step1st: step1st.jobs,
      step2nd: updatedJobs,
    };
    const raw = JSON.stringify(data);
    window.localStorage.setItem(KEY_STORAGE, raw);
  };

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY_STORAGE);
      if (raw == null) return;
      const data: StorageData = JSON.parse(raw);

      if (checkObjectAllJobFlags(data.step1st)) {
        step1st.setJobs(data.step1st);
      }
    } catch {}
  }, []);

  return (
    <>
      <BreadCrumb parts={"マンダヴィルウェポン: 全ジョブ必要アイテム数"} />
      <div className="columns">
        <div id="manderville-weapons" className="column content">
          <button style={{ float: "right" }} onClick={clear}>
            全件クリア
          </button>
          <ol>
            <li>
              <p>
                <strong>もうひとつのマンダヴィルウェポン[新規作成]</strong>
                <span>
                  ({progress.step1st} / {jobNames.length})
                </span>
                <button type="button" className="jobs-modal-opener" onClick={step1st.openHandler}>
                  jobs
                </button>
              </p>
              <ul>
                <li>
                  トームストーン天文(500個)を使って交換する<strong>希少メテオライト</strong>
                  を3個を渡す
                </li>
                <li>
                  必要数: {(jobNames.length - progress.step1st) * 3}個 -&gt; 天文
                  {((jobNames.length - progress.step1st) * 3 * 500).toLocaleString(undefined)}個
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>驚くべきマンダヴィルウェポン[強化]</strong>
                <span>
                  ({progress.step2nd} / {jobNames.length})
                </span>
                <button type="button" className="jobs-modal-opener" onClick={step2nd.openHandler}>
                  jobs
                </button>
              </p>
              <ul>
                <li>
                  トームストーン天文(500個)を使って交換する<strong>希少コンドライト</strong>
                  を3個渡す
                </li>
                <li>
                  必要数: {(jobNames.length - progress.step2nd) * 3}個 -&gt; 天文{" "}
                  {((jobNames.length - progress.step2nd) * 3 * 500).toLocaleString(undefined)}個
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <AllJobCheckbox
        isShow={step1st.isShow}
        jobs={step1st.jobs}
        changeHandler={updateStep1st}
        closeHandler={step1st.closeHandler}
      />
      <AllJobCheckbox
        isShow={step2nd.isShow}
        jobs={step2nd.jobs}
        changeHandler={updateStep2nd}
        closeHandler={step2nd.closeHandler}
      />
    </>
  );
}
