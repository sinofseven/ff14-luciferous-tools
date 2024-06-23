import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useEorzeaTime } from "@/hooks/h_eorzea_time";
import { routing } from "@/variables/routing";

export function CNavbar() {
  const [flagBurger, setFlagBurger] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(detectPrefersDarkMode());
  const et = useEorzeaTime();

  applyDarkMode(isDarkMode);

  const closeBurger = () => setFlagBurger(false);

  const pages = routing.map((item) => (
    <Link
      className="navbar-item"
      key={item.label}
      to={`/${item.path}`}
      onClick={closeBurger}
    >
      {item.label}
    </Link>
  ));

  return (
    <>
      <nav className="navbar is-link">
        <div className="navbar-brand">
          <Link
            className="navbar-item title"
            to="/"
            style={{ marginBottom: 0 }}
          >
            FF14 Luciferous Tools
          </Link>
          <a
            className="navbar-burger"
            onClick={() => setFlagBurger(!flagBurger)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-start">
          <div className="navbar-item subtitle mb-0">
            ET: {et.hours}:{et.minutes}
          </div>
          <div className="navbar-item">
            <span
              className={classNames("icon", {
                "has-text-warning": !isDarkMode,
                "has-text-black": isDarkMode,
              })}
              style={{ cursor: "pointer" }}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
            </span>
          </div>
        </div>
        <div className={classNames("navbar-menu", { "is-active": flagBurger })}>
          <div className="navbar-end">{pages}</div>
        </div>
      </nav>
    </>
  );
}

function detectPrefersDarkMode(): boolean {
  const match = window.matchMedia("(prefers-color-scheme: dark)");
  return match.matches;
}

function applyDarkMode(isDarkMode: boolean) {
  const elm = document.getElementsByTagName("html")[0];
  elm.setAttribute("data-theme", isDarkMode ? "dark" : "light");
}
