import React, { useCallback } from 'react';

// hook for form control and form validation
export function useFormWithValidation() {
  const [formValues, setFormValues] = React.useState({});
  const [formErrors, setFormErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: target.validationMessage });
    setIsFormValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setFormValues(newValues);
      setFormErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setFormValues, setFormErrors, setIsFormValid]
  );

  return [formValues, handleChange, formErrors, isFormValid, resetForm];
}
