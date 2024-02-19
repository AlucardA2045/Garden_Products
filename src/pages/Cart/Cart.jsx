import React, { useState } from "react";
import Title from "../../components/Title/Title";
import "./_Cart.scss";
import CartCard from "../../components/CartCard/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../storage/slice/cartSlice";
import Form from "../../components/Form/Form";
import { submitFormData } from "../../storage/slice/formDataSlice";

const Cart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { product, totalPrice } = useSelector(({ cartProduct }) => cartProduct);
  const dispatch = useDispatch();

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
      <div className="cart">
        <div className="products__list">
          {product.map((el) => {
            return (
              <CartCard
                key={el.id}
                item={el}
                onDelete={() => handleDeleteItem(el.id)}
              />
            );
          })}
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
