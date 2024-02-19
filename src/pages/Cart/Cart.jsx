import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import "./_Cart.scss";
import CartCard from "../../components/CartCard/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../storage/slice/cartSlice";
import Form from "../../components/Form/Form";
import { submitFormData } from "../../storage/slice/formDataSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { product, totalPrice } = useSelector(({ cartProduct }) => cartProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDeleteItem = (id) => {
    // Вызываем действие для удаления продукта из корзины
    dispatch(removeProduct(id));
  };

  const handleSubmit = (formData) => {
    dispatch(submitFormData(formData));
    setModalVisible(true);
  };

  return (
    <div className="cart__container">
      <Title ShoppingCart="Shopping cart" BackTo="Back to the store" />

      {/* Если корзина пустая, отображаем надпись */}
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

      {/* Если корзина не пустая, отображаем содержимое */}
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
            <div className="order">
              <h3>Order details</h3>
              <h4>{product.length} items</h4>
              <div className="order__info">
                <h4>Total</h4>
                <div className="order__price">{totalPrice}$</div>
              </div>
              <Form onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      )}

      {/* Отображаем модальное окно, если активно */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>
              &times;
            </span>
            <p>Ура! Данные успешно отправлены!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
