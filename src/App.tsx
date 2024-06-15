import classNames from "classnames";

import Styles from "@/App.module.css";

function App() {
  return (
    <>
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <a className="navbar-item title" href="/">
            FF14 Luciferous Tools
          </a>
        </div>
      </nav>
      <div
        className="container is-fullhd"
        style={{ backgroundColor: "red", minHeight: "93vh" }}
      >
        <h1>test</h1>
      </div>
      <div className={classNames(Styles.Footer, "has-background-link-dark")}>
        <h2>Footer Contents</h2>
      </div>
    </>
  );
}

export default App;
