import LogoSvg from "../../assets/images/logo.svg";
import CartSvg from "../../assets/images/icon.svg";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const nav = [
    {
      name: "Main Page",
      path: "/",
    },
    {
      name: "Categories",
      path: "Categories",
    },
    {
      name: "All products",
      path: "AllProduct",
    },
    {
      name: "All sales",
      path: "Allsales",
    },
  ];

  return (
    <div className={styles.header}>
      <NavLink className={styles.no__active} to="/">
        <img className={styles.header__logo} src={LogoSvg} alt="" />
      </NavLink>
      <div className={styles.nav}>
        <ul className={styles.nav_list}>
          {nav.map((el, id) => (
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? styles.no__active
                  : isActive
                  ? styles.active
                  : styles.no__active
              }
              key={el.name}
              to={`${el.path}`}
            >
              <li className={styles.nav_list_link} key={id}>
                {el.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div>
        <img className={styles.header__cart} src={CartSvg} alt="" />
        <div className={styles.round}></div>
      </div>
    </div>
  );
};

export default Header;
