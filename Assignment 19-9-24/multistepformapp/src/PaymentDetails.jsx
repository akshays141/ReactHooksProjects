import React, { useState } from 'react';

const PaymentDetails = ({ formData, setFormData, prevStep, submitForm }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      submitForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Details</h2>
      <div>
        <label>Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        {errors.cardNumber && <p>{errors.cardNumber}</p>}
      </div>
      <div>
        <label>Expiry Date:</label>
        <input
          type="text"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
        />
        {errors.expiryDate && <p>{errors.expiryDate}</p>}
      </div>
      <button type="button" onClick={prevStep}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentDetails;
