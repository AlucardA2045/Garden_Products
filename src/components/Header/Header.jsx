import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./_Header.scss";
import HamburgerMenu from "react-hamburger-menu";
import LogoSvg from "../../assets/images/logo.svg";
import CartSvg from "../../assets/images/icon.svg";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    {
      name: "Main Page",
      path: "/",
    },
    {
      name: "Categories",
      path: "/Categories",
    },
    {
      name: "All products",
      path: "/AllProduct",
    },
    {
      name: "All sales",
      path: "/AllSales",
    },
  ];

  const cartItemCount = useSelector(
    (state) => state.cartProduct.product.length
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    // Проверяем, был ли клик сделан внутри бургер-меню
    if (!event.target.closest(".burger-menu")) {
      // Если нет, закрываем бургер-меню
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Добавляем слушатель события клика при открытом бургер-меню
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      // Убираем слушатель события клика при закрытом бургер-меню
      document.removeEventListener("click", handleOutsideClick);
    }

    // Очищаем слушатель события при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="header">
      <Link className="no__active" to="/">
        <img className="header__logo" src={LogoSvg} alt="" />
      </Link>
      {isMobile ? (
        <div className="burger-menu">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleMenuToggle}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      ) : (
        <div className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="nav_list">
            {nav.map((el, id) => (
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "no__active" : isActive ? "active" : "no__active"
                }
                key={el.name}
                to={el.path}
                onClick={isMobile ? handleMenuToggle : null}
              >
                <li className="nav_list_link" key={id}>
                  {el.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
      <div className="cart-container">
        <Link to="/Cart">
          <img className="header__cart" src={CartSvg} alt="" />
        </Link>
        {cartItemCount > 0 && (
          <div className="cart-item-count">{cartItemCount}</div>
        )}
      </div>
      {isOpen && (
        <div className="mobile-nav">
          <ul className="mobile-nav_list">
            {nav.map((el, id) => (
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "no__active" : isActive ? "active" : "no__active"
                }
                key={el.name}
                to={el.path}
                onClick={handleMenuToggle}
              >
                <li className="mobile-nav_list_link" key={id}>
                  {el.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
