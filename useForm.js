import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setformState({
      ...formState, //desestructuro para mantener los otros valores del form que no se cambian
      [name]: value, //uso el name que es el identificador que use en los inputs
    });
  };

  const onResetForm = () => {
    setformState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
