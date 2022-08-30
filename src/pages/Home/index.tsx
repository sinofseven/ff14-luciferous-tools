import { FC } from "react";
import { Link } from "react-router-dom";
import { routingMap } from "../../routeMap";

const Home: FC = () => {
  const linkListItems = routingMap.slice(1).map((item) => {
    return (
      <li key={item.path}>
        <Link to={item.path}>{item.name}</Link>
      </li>
    );
  });
  return (
    <div>
      <h1>test</h1>
      <ul>{linkListItems}</ul>
    </div>
  );
};

export default Home;
