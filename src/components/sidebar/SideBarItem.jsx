import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faAddressBook,
  faCalendar,
  faUser,
  faCircleQuestion,
  faChartSimple,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

function SideBarItem({ item }) {
  let icon = "";

  if (item.path == "calendar") {
    icon = <FontAwesomeIcon icon={faCalendar} />;
  } else if (item.path == "faq") {
    icon = <FontAwesomeIcon icon={faCircleQuestion} />;
  } else if (item.path == "manageTeam") {
    icon = <FontAwesomeIcon icon={faUsers} />;
  } else if (item.path == "/") {
    icon = <FontAwesomeIcon icon={faHouse} />;
  } else if (item.path == "profileForm") {
    icon = <FontAwesomeIcon icon={faUser} />;
  } else if (item.path == "geographyChart") {
    icon = <FontAwesomeIcon icon={faMap} />;
  } else if (item.path == "barChart") {
    icon = <FontAwesomeIcon icon={faChartSimple} />;
  } else if (item.path == "contactInfo") {
    icon = <FontAwesomeIcon icon={faAddressBook} />;
  }
  return (
    <>
      <NavLink to={item.path}>
        <li className={styles.lis}>
          <span>{icon}</span> {item.name}
        </li>
      </NavLink>
    </>
  );
}

export default SideBarItem;
