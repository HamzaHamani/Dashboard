import { NavLink } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import styles from "./SideBar.module.css";

const info = [
  {
    path: "/",
    icon: "icon",
    name: "Dashboard",
  },
  {
    path: "manageTeam",
    icon: "icon",
    name: "Manage Team",
  },
  {
    path: "contactInfo",
    icon: "icon",
    name: "Contac tInfo",
  },
  {
    path: "calendar",
    icon: "icon",
    name: "Calendar",
  },
  {
    path: "profileForm",
    icon: "icon",
    name: "Profile Form",
  },
  {
    path: "faq",
    icon: "icon",
    name: "faq",
  },
  {
    path: "geographyChart",
    icon: "icon",
    name: "Geography Chart",
  },
  {
    path: "barChart",
    icon: "icon",
    name: "Bar Chart",
  },
];

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.top}>
        <p>BiBa</p>
      </div>
      <div className={styles.bottom}>
        <ul>
          {info.map((item) => (
            <SideBarItem item={item} key={item.path} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
