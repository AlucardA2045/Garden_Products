import React, { useState } from "react";
import "./_Form.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = ({ onSubmit, order }) => {
  const initialFormData = {
    name: "",
    phoneNumber: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear errors on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    // Check for empty fields
    if (!formData.name) {
      errors.name = "Please enter your name.";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Please enter your phone number.";
    }
    if (!formData.email) {
      errors.email = "Please enter your email.";
    }

    // Check email validity
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Check phone number length
    if (
      formData.phoneNumber &&
      (formData.phoneNumber.length < 6 ||
        !/^\+?\d+$/.test(formData.phoneNumber))
    ) {
      errors.phoneNumber =
        "Phone number should contain only digits or '+' and should be at least 6 characters.";
    }

    // If there are errors, set them and abort form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    onSubmit(formData); // Pass form data to parent component
    setFormData(initialFormData); // Reset form data to initial state
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        type="text"
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        error={!!formErrors.name}
        helperText={formErrors.name}
      />
      <TextField
        type="tel"
        name="phoneNumber"
        label="Phone number"
        value={formData.phoneNumber}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        error={!!formErrors.phoneNumber}
        helperText={formErrors.phoneNumber}
      />
      <TextField
        type="email"
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        error={!!formErrors.email}
        helperText={formErrors.email}
      />
      <Button type="submit" variant="contained" color="primary">
        {order ? order : "Get a discount"}
      </Button>
    </form>
  );
};

export default Form;
