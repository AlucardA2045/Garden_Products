import React, { useState } from "react";
import "./_Form.scss";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Очищаем ошибки при изменении значения поля
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    // Проверка заполненности полей
    if (!formData.name) {
      errors.name = "Please enter your name.";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Please enter your phone number.";
    }
    if (!formData.email) {
      errors.email = "Please enter your email.";
    }

    // Проверка корректности email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Проверка длины номера телефона
    if (
      formData.phoneNumber &&
      (formData.phoneNumber.length < 6 ||
        !/^\+?\d+$/.test(formData.phoneNumber))
    ) {
      errors.phoneNumber =
        "Phone number should contain only digits or '+' and should be at least 6 characters.";
    }

    // Если есть ошибки, устанавливаем их и прерываем отправку формы
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    onSubmit(formData); // Передаем данные формы в родительский компонент
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {formErrors.name && <p className="error-message">{formErrors.name}</p>}
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      {formErrors.phoneNumber && (
        <p className="error-message">{formErrors.phoneNumber}</p>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {formErrors.email && <p className="error-message">{formErrors.email}</p>}
      <button type="submit">Get a discount</button>
    </form>
  );
};

export default Form;
