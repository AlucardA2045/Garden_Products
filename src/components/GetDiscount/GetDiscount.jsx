import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Img from "../../assets/images/discount.png";
import "./_GetDiscount.scss";
import { submitFormData } from "../../storage/slice/formDataSlice";
import Form from "../Form/Form";

const GetDiscount = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    try {
      // Отправка данных формы через Redux
      dispatch(submitFormData(formData));

      // Показываем модальное окно после успешной отправки
      setModalVisible(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Обработка ошибок при отправке данных формы
    }
  };

  return (
    <div className="background_discount">
      <div className="discount__block">
        <h2>5% off on the first order</h2>
        <div className="discount__block_info">
          <img src={Img} alt="#" />
          <Form onSubmit={handleSubmit} />
        </div>
      </div>
      {/* Модальное окно */}
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

export default GetDiscount;
