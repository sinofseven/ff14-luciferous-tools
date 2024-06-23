import classNames from "classnames";
import { Outlet } from "react-router-dom";

import Styles from "@/App.module.css";
import { CNavbar } from "@/components/c_navbar";

function App() {
  return (
    <>
      <CNavbar />
      <div className="container is-fullhd" style={{ minHeight: "93vh" }}>
        <Outlet />
      </div>
      <div className={classNames(Styles.Footer, "has-background-link-dark")}>
        <h2>Footer Contents</h2>
      </div>
    </>
  );
}

export default App;
