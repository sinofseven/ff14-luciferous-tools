import { Link } from "react-router-dom";

import { PAGES } from "@/variables/routing";

export function VHome() {
  return (
    <>
      <div className="message mt-3 is-success">
        <div className="message-body">
          FF14 Luciferous Toolsにようこそ、親愛なる光の戦士様！
        </div>
      </div>
      <div className="message is-info">
        <div className="message-header">
          <Link to={`/${PAGES.treasureG10Memo.path}`}>
            {PAGES.treasureG10Memo.label}
          </Link>
        </div>
        <div className="message-body">
          宝の地図G10でどのような順番で回るかメモするためのツール
        </div>
      </div>
    </>
  );
}
