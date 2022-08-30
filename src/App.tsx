import React, { FC } from "react";
import { Link, Routes, Route } from "react-router-dom";
import useApp from "./hook";
import { formatTime } from "./utils/date";
import "./App.css";
import { routingMap } from "./routeMap";

const App: FC = () => {
  const [et, lt] = useApp();
  const routeElements = routingMap.map((item) => {
    return <Route path={item.path} element={item.element({ et })} key={item.path} />;
  });
  return (
    <>
      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            FF14 Luciferous Tools
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <span className="navbar-item">ET: {formatTime(et)}</span>
            <span className="navbar-item">LT: {formatTime(lt)}</span>
          </div>
        </div>
      </nav>
      <section className="hero has-background-warning-light is-fullheight">
        <div className="container">
          <Routes>{routeElements}</Routes>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            created by sinofseven. The source code is licensed{" "}
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
