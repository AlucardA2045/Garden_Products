import LogoSvg from "../../assets/images/logo.svg";
import CartSvg from "../../assets/images/icon.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const nav = [
    {
      name: "Main Page",
      name2: "/",
    },
    {
      name: "Categories",
      name2: "Categories",
    },
    {
      name: "All products",
      name2: "AllProduct",
    },
    {
      name: "All sales",
      name2: "Allsales",
    },
  ];

  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.header__logo} src={LogoSvg} alt="" />
      </Link>
      <div className={styles.nav}>
        <ul className={styles.nav_list}>
          {nav.map((el, id) => (
            <Link key={el.name} to={`${el.name2}`}>
              <li className={styles.nav_list_link} key={id}>
                {el.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <img className={styles.header__cart} src={CartSvg} alt="" />
    </div>
  );
};

export default Header;
