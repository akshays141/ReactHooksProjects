import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import PaymentDetails from './PaymentDetails';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    cardNumber: '',
    expiryDate: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    console.log('Form submitted!', formData);
    alert('Form submitted successfully!');
  };

  switch (step) {
    case 1:
      return (
        <PersonalDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <AddressDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <PaymentDetails
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      );
    default:
      return <h1>Multi-Step Form</h1>;
  }
};

export default MultiStepForm;
