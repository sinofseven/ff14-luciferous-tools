import { FC } from "react";
import { Link } from "react-router-dom";

type BreadCrumbRoute = {
  name: string;
  to?: string;
};

type BreadCrumbPart = BreadCrumbRoute | string;

type BreadCrumbProps = {
  parts: BreadCrumbPart[] | BreadCrumbPart;
};

const styleNonLink = {
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
};

const BreadCrumb: FC<BreadCrumbProps> = ({ parts }) => {
  const array: BreadCrumbPart[] = parts instanceof Array ? parts : [parts];
  const data = array.map((item) => {
    const route: BreadCrumbRoute = typeof item === "string" ? { name: item } : item;
    if (route.to == null) {
      return (
        <li key={route.name}>
          <span style={styleNonLink}>{route.name}</span>
        </li>
      );
    } else {
      return (
        <li key={route.name}>
          <Link to={route.to}>{route.name}</Link>
        </li>
      );
    }
  });
  return (
    <>
      <nav className="breadcrumb" style={{ margin: "0.5rem" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {data}
        </ul>
      </nav>
      <hr style={{ margin: 0 }} />
    </>
  );
};

export default BreadCrumb;
