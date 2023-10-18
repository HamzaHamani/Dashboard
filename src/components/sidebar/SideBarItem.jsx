import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

function SideBarItem({ item }) {
  return (
    <>
      <NavLink to={item.path}>
        <li>
          <span>{item.icon}</span> {item.name}
        </li>
      </NavLink>
    </>
  );
}

export default SideBarItem;
