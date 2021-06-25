import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { useAppContext } from "../context/state";
import { useReducerValue } from "./../context/reducerContext";

const Nav = () => {
  const [count] = useAppContext();
  const [{ count: rCount }] = useReducerValue();
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/counter">Context Counter</Link>
        </li>
        <li>
          <Link href="/r_counter">Reducer Counter</Link>
        </li>
      </ul>
      <ul>
        <li>
          <h6>
            C Count :{" "}
            <span style={{ color: "yellow", fontSize: "16px" }}>{count}</span>
          </h6>
        </li>
        <li>
          <h6 style={{ marginLeft: "10px" }}>
            R Count:{" "}
            <span style={{ color: "green", fontSize: "16px" }}>{rCount}</span>
          </h6>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
