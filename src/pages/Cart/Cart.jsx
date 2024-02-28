import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import "./_Cart.scss";
import CartCard from "../../components/CartCard/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../storage/slice/cartSlice";
import Form from "../../components/Form/Form";
import { submitFormData } from "../../storage/slice/formDataSlice";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ModaleWindow from "../../components/ModaleWindow/ModaleWindow";

const Cart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { product, totalPrice } = useSelector(({ cartProduct }) => cartProduct);
  const [buttonClass, setButtonClass] = useState("order");
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDeleteItem = (id) => {
    dispatch(removeProduct(id));
  };

  const handleSubmit = (formData) => {
    // Отправка данных формы
    dispatch(submitFormData(formData));

    // Удаление всех продуктов из корзины
    product.forEach((item) => {
      dispatch(removeProduct(item.id));
    });

    // Отображение модального окна
    setModalVisible(true);
    setButtonClass("order active");
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className="cart__container">
      <Title ShoppingCart="Shopping cart" BackTo="Back to the store" />

      {product.length === 0 && (
        <div className="no__cart">
          <p>Looks like you have no items in your basket currently.</p>
          <div className="continue-shopping-button">
            <Link to="/AllProduct">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}

      {product.length > 0 && (
        <div className="cart">
          <div className="products__list">
            {product.map((el) => (
              <CartCard
                key={el.id}
                item={el}
                onDelete={() => handleDeleteItem(el.id)}
              />
            ))}
          </div>
          <div className="block__order">
            <div className={buttonClass}>
              <h3>Order details</h3>
              <h4>{product.length} items</h4>
              <div className="order__info">
                <h4>Total</h4>
                <div className="order__price">
                  {`${Math.round(Number(totalPrice) * 100) / 100}`}$
                </div>
              </div>
              <Form order="Order" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      )}

      {modalVisible && <ModaleWindow setModalVisible={setModalVisible} />}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Ура! Данные успешно отправлены!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Cart;
