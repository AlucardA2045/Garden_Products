import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Img from "../../assets/images/discount.png";
import "./_GetDiscount.scss";
import { submitFormData } from "../../storage/slice/formDataSlice";
import Form from "../Form/Form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ModaleWindow from "../ModaleWindow/ModaleWindow";

const GetDiscount = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonClass, setButtonClass] = useState("discount__block_info");
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    try {
      // Отправка данных формы через Redux
      dispatch(submitFormData(formData));

      // Показываем модальное окно после успешной отправки
      setModalVisible(true);

      // Меняем класс кнопки на активный после успешной отправки
      setButtonClass("discount__block_info active");

      // Показываем Snackbar после успешной отправки
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Обработка ошибок при отправке данных формы
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className="background_discount">
      <div className="discount__block">
        <h2>5% off on the first order</h2>
        <div className={buttonClass}>
          <img src={Img} alt="#" />
          <Form onSubmit={handleSubmit} />
        </div>
      </div>
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

export default GetDiscount;
