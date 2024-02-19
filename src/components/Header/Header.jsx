import React from "react";
import LogoSvg from "../../assets/images/logo.svg";
import CartSvg from "../../assets/images/icon.svg";
import "./_Header.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

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

  // Получаем количество элементов в корзине
  const cartItemCount = useSelector(
    (state) => state.cartProduct.product.length
  );

  return (
    <div className="header">
      <Link className="no__active" to="/">
        <img className="header__logo" src={LogoSvg} alt="" />
      </Link>
      <div className="nav">
        <ul className="nav_list">
          {nav.map((el, id) => (
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "no__active" : isActive ? "active" : "no__active"
              }
              key={el.name}
              to={`${el.path}`}
            >
              <li className="nav_list_link" key={id}>
                {el.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <Link to="/Cart">
          <img className="header__cart" src={CartSvg} alt="" />
        </Link>
        {cartItemCount > 0 && (
          <div className="cart-item-count">{cartItemCount}</div>
        )}
      </div>
    </div>
  );
};

export default Header;
